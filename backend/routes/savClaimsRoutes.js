// routes/savClaimsRoutes.js
import express from 'express';
import { 
  getAllSavClaims,
  getSavClaimById,
  createSavClaim,
  updateSavClaimStatus,
  updateSavClaim,
  deleteSavClaim
} from '../controllers/savClaimsController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/**
 * @route   GET /api/sav-claims
 * @desc    Récupérer toutes les demandes SAV
 * @access  Admin/Technicien
 */
router.get('/', verifyToken, getAllSavClaims);

/**
 * @route   GET /api/sav-claims/:id
 * @desc    Récupérer une demande SAV par son ID
 * @access  Admin/Technicien/Propriétaire
 */
router.get('/:id', verifyToken, getSavClaimById);

/**
 * @route   POST /api/sav-claims
 * @desc    Créer une nouvelle demande SAV
 * @access  Public
 */
router.post('/', createSavClaim);

/**
 * @route   PUT /api/sav-claims/:id/status
 * @desc    Mettre à jour le statut d'une demande SAV
 * @access  Admin/Technicien
 */
router.put('/:id/status', verifyToken, updateSavClaimStatus);

/**
 * @route   PUT /api/sav-claims/:id
 * @desc    Mettre à jour une demande SAV
 * @access  Admin/Technicien
 */
router.put('/:id', verifyToken, updateSavClaim);

/**
 * @route   DELETE /api/sav-claims/:id
 * @desc    Supprimer une demande SAV
 * @access  Admin
 */
router.delete('/:id', verifyToken, deleteSavClaim);

export default router;
