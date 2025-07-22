import jwt from 'jsonwebtoken';
import { prisma } from '../server.js';

/**
 * Middleware pour vérifier le jeton d'authentification
 */
export const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token || 
                  (req.headers.authorization && req.headers.authorization.split(' ')[1]);

    if (!token) {
      return res.status(401).json({ message: 'Accès refusé. Authentification requise.' });
    }

    // Vérifier le jeton
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Vérifier si la session existe toujours en base de données
    const session = await prisma.session.findUnique({
      where: { token: token },
      include: { user: true }
    });

    if (!session || new Date(session.expiresAt) < new Date()) {
      return res.status(401).json({ message: 'Session expirée ou invalide.' });
    }

    // Attacher les informations utilisateur à la requête
    req.user = session.user;
    req.sessionId = session.id;
    
    next();
  } catch (error) {
    console.error('Erreur de vérification du jeton:', error);
    return res.status(401).json({ message: 'Jeton invalide.' });
  }
};

/**
 * Middleware pour vérifier si l'utilisateur a un rôle spécifique
 */
export const requireRole = (roles) => {
  return (req, res, next) => {
    // verifyToken doit être exécuté avant
    if (!req.user) {
      return res.status(401).json({ message: 'Authentification requise.' });
    }

    // Vérifier si le rôle de l'utilisateur est dans la liste des rôles autorisés
    const hasRequiredRole = Array.isArray(roles) 
      ? roles.includes(req.user.role)
      : req.user.role === roles;

    if (!hasRequiredRole) {
      return res.status(403).json({ 
        message: 'Accès refusé. Vous n\'avez pas les autorisations nécessaires.'
      });
    }

    next();
  };
};

/**
 * Middleware pour rafraîchir le jeton d'authentification si nécessaire
 */
export const refreshToken = async (req, res, next) => {
  try {
    if (!req.user || !req.sessionId) {
      return next();
    }

    const session = await prisma.session.findUnique({
      where: { id: req.sessionId }
    });

    // Calculer le temps restant avant l'expiration (en minutes)
    const expiresAt = new Date(session.expiresAt);
    const timeUntilExpiry = (expiresAt - new Date()) / (1000 * 60);
    
    // Si le jeton expire dans moins d'une heure (60 minutes), le rafraîchir
    if (timeUntilExpiry < 60) {
      // Définir une nouvelle date d'expiration (7 jours)
      const newExpiresAt = new Date();
      newExpiresAt.setDate(newExpiresAt.getDate() + 7);

      // Générer un nouveau jeton
      const newToken = jwt.sign(
        { userId: req.user.id, role: req.user.role },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );

      // Mettre à jour la session en base de données
      await prisma.session.update({
        where: { id: req.sessionId },
        data: {
          token: newToken,
          expiresAt: newExpiresAt
        }
      });

      // Définir le nouveau cookie
      res.cookie('token', newToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 jours en millisecondes
      });
    }

    next();
  } catch (error) {
    console.error('Erreur lors du rafraîchissement du jeton:', error);
    next(); // Continuer même en cas d'erreur pour ne pas bloquer l'utilisateur
  }
};
