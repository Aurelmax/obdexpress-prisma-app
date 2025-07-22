// controllers/savClaimsController.js
import prisma from '../utils/prisma.js';

// Récupérer toutes les demandes SAV
export const getAllSavClaims = async (req, res) => {
  try {
    const savClaims = await prisma.demandeSAV.findMany({
      include: {
        reservation: {
          select: {
            id: true,
            nom: true,
            prenom: true,
            email: true,
            telephone: true,
            marque: true,
            modele: true
          }
        }
      },
      orderBy: {
        created_at: 'desc'
      }
    });
    
    res.json(savClaims);
  } catch (error) {
    console.error('Erreur lors de la récupération des demandes SAV:', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des demandes SAV', error: error.message });
  }
};

// Récupérer une demande SAV par ID
export const getSavClaimById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const savClaim = await prisma.demandeSAV.findUnique({
      where: {
        id: id
      },
      include: {
        reservation: {
          select: {
            id: true,
            nom: true,
            prenom: true,
            email: true,
            telephone: true,
            marque: true,
            modele: true
          }
        }
      }
    });
    
    if (!savClaim) {
      return res.status(404).json({ message: 'Demande SAV non trouvée' });
    }
    
    res.json(savClaim);
  } catch (error) {
    console.error(`Erreur lors de la récupération de la demande SAV ${req.params.id}:`, error);
    res.status(500).json({ message: 'Erreur lors de la récupération de la demande SAV', error: error.message });
  }
};

// Créer une nouvelle demande SAV
export const createSavClaim = async (req, res) => {
  try {
    const {
      nom,
      prenom,
      email,
      telephone,
      sujet,
      message,
      fichier_url,
      reservation_id
    } = req.body;
    
    // Validation basique
    if (!nom || !prenom || !email || !telephone || !sujet || !message) {
      return res.status(400).json({ 
        message: 'Informations manquantes pour créer la demande SAV',
        required: ['nom', 'prenom', 'email', 'telephone', 'sujet', 'message']
      });
    }

    // Si un reservation_id est fourni, vérifier que la réservation existe
    if (reservation_id) {
      const reservation = await prisma.reservation.findUnique({
        where: { id: reservation_id }
      });

      if (!reservation) {
        return res.status(404).json({ message: 'Réservation non trouvée' });
      }
    }
    
    // Créer la demande SAV
    const nouvelleDemande = await prisma.demandeSAV.create({
      data: {
        nom,
        prenom,
        email,
        telephone,
        sujet,
        message,
        statut: 'NOUVELLE',
        fichier_url,
        ...(reservation_id && { reservation: { connect: { id: reservation_id } } })
      },
      include: {
        reservation: {
          select: {
            id: true,
            nom: true,
            prenom: true,
            email: true
          }
        }
      }
    });
    
    res.status(201).json(nouvelleDemande);
  } catch (error) {
    console.error('Erreur lors de la création de la demande SAV:', error);
    res.status(500).json({ message: 'Erreur lors de la création de la demande SAV', error: error.message });
  }
};

// Mettre à jour le statut d'une demande SAV
export const updateSavClaimStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { statut } = req.body;
    
    // Vérifier que le statut est valide
    const statutsValides = ['NOUVELLE', 'EN_COURS', 'RESOLUE', 'FERMEE'];
    if (!statutsValides.includes(statut)) {
      return res.status(400).json({ 
        message: 'Statut invalide',
        valid_statuses: statutsValides
      });
    }
    
    const savClaim = await prisma.demandeSAV.findUnique({
      where: { id }
    });
    
    if (!savClaim) {
      return res.status(404).json({ message: 'Demande SAV non trouvée' });
    }
    
    // Mettre à jour la demande SAV
    const savClaimMAJ = await prisma.demandeSAV.update({
      where: { id },
      data: { statut },
    });
    
    res.json(savClaimMAJ);
  } catch (error) {
    console.error(`Erreur lors de la mise à jour du statut de la demande SAV ${req.params.id}:`, error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour du statut de la demande SAV', error: error.message });
  }
};

// Mettre à jour une demande SAV
export const updateSavClaim = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nom,
      prenom,
      email,
      telephone,
      sujet,
      message,
      statut,
      fichier_url,
      notes_internes,
      reservation_id
    } = req.body;
    
    const savClaim = await prisma.demandeSAV.findUnique({
      where: { id },
    });
    
    if (!savClaim) {
      return res.status(404).json({ message: 'Demande SAV non trouvée' });
    }
    
    // Préparer les données de mise à jour
    const updateData = {};
    
    // Ajouter seulement les champs fournis
    if (nom) updateData.nom = nom;
    if (prenom) updateData.prenom = prenom;
    if (email) updateData.email = email;
    if (telephone) updateData.telephone = telephone;
    if (sujet) updateData.sujet = sujet;
    if (message !== undefined) updateData.message = message;
    if (statut) updateData.statut = statut;
    if (fichier_url !== undefined) updateData.fichier_url = fichier_url;
    if (notes_internes !== undefined) updateData.notes_internes = notes_internes;
    
    // Gérer la relation avec la réservation
    if (reservation_id) {
      const reservation = await prisma.reservation.findUnique({
        where: { id: reservation_id }
      });

      if (!reservation) {
        return res.status(404).json({ message: 'Réservation non trouvée' });
      }

      updateData.reservation = { connect: { id: reservation_id } };
    }
    
    // Mise à jour de la demande SAV
    const savClaimMAJ = await prisma.demandeSAV.update({
      where: { id },
      data: updateData,
      include: {
        reservation: {
          select: {
            id: true,
            nom: true,
            prenom: true,
            email: true
          }
        }
      }
    });
    
    res.json(savClaimMAJ);
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de la demande SAV ${req.params.id}:`, error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la demande SAV', error: error.message });
  }
};

// Supprimer une demande SAV
export const deleteSavClaim = async (req, res) => {
  try {
    const { id } = req.params;
    
    const savClaim = await prisma.demandeSAV.findUnique({
      where: { id }
    });
    
    if (!savClaim) {
      return res.status(404).json({ message: 'Demande SAV non trouvée' });
    }
    
    // Supprimer la demande SAV
    await prisma.demandeSAV.delete({
      where: { id },
    });
    
    res.json({ message: 'Demande SAV supprimée avec succès' });
  } catch (error) {
    console.error(`Erreur lors de la suppression de la demande SAV ${req.params.id}:`, error);
    res.status(500).json({ message: 'Erreur lors de la suppression de la demande SAV', error: error.message });
  }
};
