// routes/reservationsRoutes.js
import express from 'express';
import { 
  getAllReservations, 
  getReservationById, 
  createReservation, 
  updateReservationStatus,
  updateReservation,
  deleteReservation 
} from '../controllers/reservationsController.js';
// Middleware d'authentification (à utiliser sur les routes protégées)
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/**
 * @route   GET /api/reservations
 * @desc    Récupérer toutes les réservations
 * @access  Admin/Technicien
 */
router.get('/', verifyToken, getAllReservations);

/**
 * @route   GET /api/reservations/:id
 * @desc    Récupérer une réservation par son ID
 * @access  Admin/Technicien/Propriétaire
 */
router.get('/:id', verifyToken, getReservationById);

/**
 * @route   POST /api/reservations
 * @desc    Créer une nouvelle réservation
 * @access  Public
 */
router.post('/', createReservation);

/**
 * @route   PUT /api/reservations/:id/status
 * @desc    Mettre à jour le statut d'une réservation
 * @access  Admin/Technicien
 */
router.put('/:id/status', verifyToken, updateReservationStatus);

/**
 * @route   PUT /api/reservations/:id
 * @desc    Mettre à jour une réservation
 * @access  Admin/Technicien/Propriétaire
 */
router.put('/:id', verifyToken, updateReservation);

/**
 * @route   DELETE /api/reservations/:id
 * @desc    Supprimer une réservation
 * @access  Admin
 */
router.delete('/:id', verifyToken, deleteReservation);

export default router;
