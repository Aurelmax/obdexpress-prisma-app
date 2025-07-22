// routes/disponibilitesRoutes.js
import express from 'express';
import { 
  getAllDisponibilites,
  getDisponibilitesByPeriod,
  getAvailableTimeSlots,
  createDisponibilite,
  updateDisponibilite,
  deleteDisponibilite,
  generateTimeSlots
} from '../controllers/disponibilitesController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/**
 * @route   GET /api/disponibilites
 * @desc    Récupérer toutes les disponibilités
 * @access  Admin/Technicien
 */
router.get('/', verifyToken, getAllDisponibilites);

/**
 * @route   GET /api/disponibilites/period
 * @desc    Récupérer les disponibilités par période (pour le calendrier)
 * @access  Public
 */
router.get('/period', getDisponibilitesByPeriod);

/**
 * @route   GET /api/disponibilites/available
 * @desc    Récupérer les créneaux disponibles pour une date et une ville
 * @access  Public
 */
router.get('/available', getAvailableTimeSlots);

/**
 * @route   POST /api/disponibilites
 * @desc    Créer une nouvelle disponibilité
 * @access  Admin/Technicien
 */
router.post('/', verifyToken, createDisponibilite);

/**
 * @route   POST /api/disponibilites/generate
 * @desc    Générer des créneaux pour une période
 * @access  Admin/Technicien
 */
router.post('/generate', verifyToken, generateTimeSlots);

/**
 * @route   PUT /api/disponibilites/:id
 * @desc    Mettre à jour une disponibilité
 * @access  Admin/Technicien
 */
router.put('/:id', verifyToken, updateDisponibilite);

/**
 * @route   DELETE /api/disponibilites/:id
 * @desc    Supprimer une disponibilité
 * @access  Admin/Technicien
 */
router.delete('/:id', verifyToken, deleteDisponibilite);

export default router;
