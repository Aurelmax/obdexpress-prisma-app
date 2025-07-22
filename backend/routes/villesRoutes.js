// routes/villesRoutes.js
import express from 'express';
import { getAllVilles, getVilleBySlug, createVille, incrementVilleVisites, updateVille, deleteVille } from '../controllers/villesController.js';

const router = express.Router();

/**
 * @route   GET /api/villes
 * @desc    Récupérer toutes les villes
 * @access  Public
 */
router.get('/', getAllVilles);

/**
 * @route   GET /api/villes/:slug
 * @desc    Récupérer une ville par son slug
 * @access  Public
 */
router.get('/:slug', getVilleBySlug);

/**
 * @route   POST /api/villes
 * @desc    Créer une nouvelle ville
 * @access  Admin
 */
router.post('/', createVille);

/**
 * @route   PUT /api/villes/:id/increment-visites
 * @desc    Incrémenter le compteur de visites d'une ville
 * @access  Public
 */
router.put('/:id/increment-visites', incrementVilleVisites);

/**
 * @route   PUT /api/villes/:id
 * @desc    Mettre à jour une ville
 * @access  Admin
 */
router.put('/:id', updateVille);

/**
 * @route   DELETE /api/villes/:id
 * @desc    Supprimer une ville
 * @access  Admin
 */
router.delete('/:id', deleteVille);

export default router;
