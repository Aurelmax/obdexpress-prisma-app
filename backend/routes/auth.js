import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { OAuth2Client } from 'google-auth-library';
import prisma from '../utils/prisma.js';
import { verifyToken, refreshToken } from '../middleware/auth.js';

const router = express.Router();
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

/**
 * Authentification avec email/mot de passe
 * @route POST /api/auth/login
 * @access Public
 */
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ message: 'Email et mot de passe requis.' });
    }
    
    // Rechercher l'utilisateur par email
    const user = await prisma.user.findUnique({ where: { email } });
    
    if (!user || !user.password) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
    }
    
    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect.' });
    }
    
    // Créer une session pour l'utilisateur
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // Session de 7 jours
    
    // Créer un JWT pour l'utilisateur
    const jwtToken = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    // Enregistrer la session en base de données
    const session = await prisma.session.create({
      data: {
        userId: user.id,
        token: jwtToken,
        expiresAt
      }
    });
    
    // Définir un cookie HTTP-only
    res.cookie('token', jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 jours en millisecondes
    });
    
    // Renvoyer les informations utilisateur (sans données sensibles)
    return res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name || null,
        picture: user.picture || null,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    return res.status(500).json({ message: 'Erreur lors de la connexion.' });
  }
});

/**
 * Vérifier et retourner la session actuelle
 * @route GET /api/auth/session
 * @access Public
 */
router.get('/session', async (req, res) => {
  try {
    const token = req.cookies.token || 
                 (req.headers.authorization && req.headers.authorization.split(' ')[1]);
    
    if (!token) {
      return res.status(200).json(null);
    }
    
    // Vérifier le jeton
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Vérifier si la session existe toujours en base de données
      const session = await prisma.session.findUnique({
        where: { token },
        include: { user: true }
      });
      
      if (!session || new Date(session.expiresAt) < new Date()) {
        return res.status(200).json(null);
      }
      
      // Renvoyer les informations utilisateur
      return res.status(200).json({
        user: {
          id: session.user.id,
          email: session.user.email,
          name: session.user.name,
          picture: session.user.picture,
          role: session.user.role
        }
      });
    } catch (error) {
      // Token invalide
      return res.status(200).json(null);
    }
  } catch (error) {
    console.error('Erreur lors de la vérification de session:', error);
    return res.status(500).json({ message: 'Erreur serveur.' });
  }
});

/**
 * Authentification avec Google OAuth
 * @route POST /api/auth/google
 * @access Public
 */
router.post('/google', async (req, res) => {
  try {
    const { token: code } = req.body;
    
    if (!code) {
      return res.status(400).json({ message: 'Code d\'autorisation Google manquant.' });
    }

    // Échanger le code d'autorisation contre des tokens
    const { tokens } = await googleClient.getToken({
      code,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI || 'postmessage' // 'postmessage' est utilisé pour le flux implicite dans le navigateur
    });

    // Vérifier le token ID
    const ticket = await googleClient.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    const { email, name, picture, sub: googleId } = payload;

    // Rechercher l'utilisateur ou le créer s'il n'existe pas
    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      // Créer un nouvel utilisateur
      user = await prisma.user.create({
        data: {
          email,
          name,
          picture,
          googleId,
          // Par défaut, le premier utilisateur est SUPER_ADMIN, les autres sont USER
          role: await prisma.user.count() === 0 ? 'SUPER_ADMIN' : 'USER'
        }
      });
    } else {
      // Mettre à jour les informations de l'utilisateur existant
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          name,
          picture,
          googleId,
          updated_at: new Date()
        }
      });
    }

    // Créer une session pour l'utilisateur
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // Session de 7 jours

    // Créer un JWT pour l'utilisateur
    const jwtToken = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Enregistrer la session en base de données
    const session = await prisma.session.create({
      data: {
        userId: user.id,
        token: jwtToken,
        expiresAt
      }
    });

    // Définir un cookie HTTP-only
    res.cookie('token', jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 jours en millisecondes
    });

    // Renvoyer les informations utilisateur (sans données sensibles)
    return res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        picture: user.picture,
        role: user.role
      },
      message: 'Authentification réussie.'
    });
  } catch (error) {
    console.error('Erreur d\'authentification Google:', error);
    return res.status(500).json({ message: 'Erreur d\'authentification.' });
  }
});

/**
 * Déconnexion
 * @route POST /api/auth/logout
 * @access Private
 */
router.post('/logout', verifyToken, async (req, res) => {
  try {
    if (req.sessionId) {
      // Supprimer la session de la base de données
      await prisma.session.delete({
        where: { id: req.sessionId }
      });
    }

    // Supprimer le cookie
    res.clearCookie('token');
    
    return res.status(200).json({ message: 'Déconnexion réussie.' });
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
    return res.status(500).json({ message: 'Erreur lors de la déconnexion.' });
  }
});

/**
 * Vérifier l'état de l'authentification
 * @route GET /api/auth/me
 * @access Private
 */
router.get('/me', verifyToken, refreshToken, async (req, res) => {
  try {
    // req.user est défini par le middleware verifyToken
    return res.status(200).json({
      user: {
        id: req.user.id,
        email: req.user.email,
        name: req.user.name,
        picture: req.user.picture,
        role: req.user.role
      },
      authenticated: true
    });
  } catch (error) {
    console.error('Erreur lors de la vérification de l\'authentification:', error);
    return res.status(500).json({ message: 'Erreur serveur.' });
  }
});

/**
 * Liste des utilisateurs (réservé aux administrateurs)
 * @route GET /api/auth/users
 * @access Private/Admin
 */
router.get('/users', verifyToken, async (req, res) => {
  try {
    // Vérifier si l'utilisateur est un administrateur
    if (req.user.role !== 'ADMIN' && req.user.role !== 'SUPER_ADMIN') {
      return res.status(403).json({ message: 'Accès refusé. Vous n\'avez pas les autorisations nécessaires.' });
    }

    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        picture: true,
        role: true,
        created_at: true
      }
    });

    return res.status(200).json({ users });
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    return res.status(500).json({ message: 'Erreur serveur.' });
  }
});

/**
 * Modifier le rôle d'un utilisateur (réservé aux super admins)
 * @route PATCH /api/auth/users/:id/role
 * @access Private/SuperAdmin
 */
router.patch('/users/:id/role', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    // Vérifier si l'utilisateur est un super administrateur
    if (req.user.role !== 'SUPER_ADMIN') {
      return res.status(403).json({ message: 'Accès refusé. Vous n\'avez pas les autorisations nécessaires.' });
    }

    // Valider le rôle
    if (!['USER', 'ADMIN', 'SUPER_ADMIN'].includes(role)) {
      return res.status(400).json({ message: 'Rôle invalide.' });
    }

    // Vérifier que l'utilisateur existe
    const targetUser = await prisma.user.findUnique({
      where: { id }
    });

    if (!targetUser) {
      return res.status(404).json({ message: 'Utilisateur non trouvé.' });
    }

    // Un SUPER_ADMIN ne peut pas se rétrograder lui-même
    if (id === req.user.id && req.user.role === 'SUPER_ADMIN' && role !== 'SUPER_ADMIN') {
      return res.status(400).json({ message: 'Vous ne pouvez pas vous rétrograder vous-même.' });
    }

    // Mettre à jour le rôle
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { role }
    });

    return res.status(200).json({ 
      message: 'Rôle mis à jour avec succès.',
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        name: updatedUser.name,
        role: updatedUser.role
      }
    });
  } catch (error) {
    console.error('Erreur lors de la modification du rôle:', error);
    return res.status(500).json({ message: 'Erreur serveur.' });
  }
});

export default router;
