import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

// Import des routes et middlewares
import authRoutes from './routes/auth.js';
import villesRoutes from './routes/villesRoutes.js';
import reservationsRoutes from './routes/reservationsRoutes.js';
import disponibilitesRoutes from './routes/disponibilitesRoutes.js';
import savClaimsRoutes from './routes/savClaimsRoutes.js';
import { verifyToken } from './middleware/auth.js';

// Import du client Prisma singleton
import prisma from './utils/prisma.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/villes', villesRoutes);
app.use('/api/reservations', reservationsRoutes);
app.use('/api/disponibilites', disponibilitesRoutes);
app.use('/api/sav-claims', savClaimsRoutes);

// Test protected route
app.get('/api/protected', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Une erreur est survenue sur le serveur',
    error: process.env.NODE_ENV === 'production' ? {} : err.message
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { prisma };
