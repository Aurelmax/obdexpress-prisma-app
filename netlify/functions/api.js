const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

// Importer les routes
const authRoutes = require('../../backend/routes/auth');
const userRoutes = require('../../backend/routes/users');
const disponibilitesRoutes = require('../../backend/routes/disponibilites');

// Importer le client Prisma
const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

// Créer l'application Express
const app = express();

// Middleware de base
app.use(express.json());
app.use(cookieParser());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? process.env.FRONTEND_URL : 'http://localhost:8082',
  credentials: true
}));
app.use(morgan('combined'));

// Middleware d'authentification
const authenticateJWT = (req, res, next) => {
  const token = req.cookies.jwt || req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    req.user = null;
    return next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    req.user = null;
    next();
  }
};

// Middleware de vérification des rôles
const requireRole = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Non authentifié' });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Non autorisé' });
    }

    next();
  };
};

// Middleware global d'authentification
app.use(authenticateJWT);

// Routes d'API
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/disponibilites', disponibilitesRoutes);

// Route de santé
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', environment: process.env.NODE_ENV });
});

// Route pour tester l'authentification
app.get('/api/me', (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Non authentifié' });
  }
  
  return res.json({ user: req.user });
});

// Gestionnaire d'erreurs global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erreur serveur' });
});

// Exporter le handler serverless
module.exports.handler = serverless(app);
