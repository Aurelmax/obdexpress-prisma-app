// controllers/reservationsController.js
import prisma from '../utils/prisma.js';

// Récupérer toutes les réservations
export const getAllReservations = async (req, res) => {
  try {
    const reservations = await prisma.reservation.findMany({
      orderBy: {
        date_rdv: 'desc',
      },
      include: {
        disponibilite: true,
      },
    });
    
    res.json(reservations);
  } catch (error) {
    console.error('Erreur lors de la récupération des réservations:', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des réservations', error: error.message });
  }
};

// Récupérer une réservation par ID
export const getReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const reservation = await prisma.reservation.findUnique({
      where: {
        id: id,
      },
      include: {
        disponibilite: true,
        demandes_sav: true,
      },
    });
    
    if (!reservation) {
      return res.status(404).json({ message: 'Réservation non trouvée' });
    }
    
    res.json(reservation);
  } catch (error) {
    console.error(`Erreur lors de la récupération de la réservation ${req.params.id}:`, error);
    res.status(500).json({ message: 'Erreur lors de la récupération de la réservation', error: error.message });
  }
};

// Créer une nouvelle réservation
export const createReservation = async (req, res) => {
  try {
    const {
      nom,
      prenom,
      email,
      telephone,
      adresse,
      ville,
      code_postal,
      marque,
      modele,
      annee,
      immatriculation,
      date_rdv,
      creneau_rdv,
      service,
      message,
      disponibilite_id,
      user_id
    } = req.body;
    
    // Validation basique
    if (!nom || !prenom || !email || !telephone || !date_rdv || !creneau_rdv || !service) {
      return res.status(400).json({ 
        message: 'Informations manquantes pour créer la réservation',
        required: ['nom', 'prenom', 'email', 'telephone', 'date_rdv', 'creneau_rdv', 'service']
      });
    }

    // Vérifier si le créneau est disponible
    if (disponibilite_id) {
      const disponibilite = await prisma.disponibilite.findUnique({
        where: { id: disponibilite_id }
      });

      if (!disponibilite) {
        return res.status(404).json({ message: 'Créneau de disponibilité non trouvé' });
      }

      if (disponibilite.statut !== 'DISPONIBLE') {
        return res.status(409).json({ message: 'Ce créneau n\'est plus disponible' });
      }
    }
    
    // Créer la réservation
    const nouvelleReservation = await prisma.reservation.create({
      data: {
        nom,
        prenom,
        email,
        telephone,
        adresse,
        ville,
        code_postal,
        marque,
        modele,
        annee: annee ? parseInt(annee) : null,
        immatriculation,
        date_rdv: new Date(date_rdv),
        creneau_rdv,
        service,
        message,
        statut: 'EN_ATTENTE',
        ...(disponibilite_id && { disponibilite: { connect: { id: disponibilite_id } } }),
        ...(user_id && { user: { connect: { id: user_id } } })
      },
    });

    // Si un créneau de disponibilité est fourni, le marquer comme réservé
    if (disponibilite_id) {
      await prisma.disponibilite.update({
        where: { id: disponibilite_id },
        data: { statut: 'RESERVE' }
      });
    }
    
    res.status(201).json(nouvelleReservation);
  } catch (error) {
    console.error('Erreur lors de la création de la réservation:', error);
    res.status(500).json({ message: 'Erreur lors de la création de la réservation', error: error.message });
  }
};

// Mettre à jour le statut d'une réservation
export const updateReservationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { statut } = req.body;
    
    // Vérifier que le statut est valide
    const statutsValides = ['EN_ATTENTE', 'CONFIRMEE', 'ANNULEE', 'TERMINEE', 'CONFIRME', 'TERMINE', 'NOUVELLE'];
    if (!statutsValides.includes(statut)) {
      return res.status(400).json({ 
        message: 'Statut invalide',
        valid_statuses: statutsValides
      });
    }
    
    const reservation = await prisma.reservation.findUnique({
      where: { id },
      include: { disponibilite: true }
    });
    
    if (!reservation) {
      return res.status(404).json({ message: 'Réservation non trouvée' });
    }
    
    // Mettre à jour la réservation
    const reservationMAJ = await prisma.reservation.update({
      where: { id },
      data: { statut },
    });
    
    // Si le statut est "ANNULEE", libérer le créneau de disponibilité
    if (statut === 'ANNULEE' && reservation.disponibilite_id) {
      await prisma.disponibilite.update({
        where: { id: reservation.disponibilite_id },
        data: { statut: 'DISPONIBLE' }
      });
    }
    
    res.json(reservationMAJ);
  } catch (error) {
    console.error(`Erreur lors de la mise à jour du statut de la réservation ${req.params.id}:`, error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour du statut de la réservation', error: error.message });
  }
};

// Mettre à jour une réservation
export const updateReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nom,
      prenom,
      email,
      telephone,
      adresse,
      ville,
      code_postal,
      marque,
      modele,
      annee,
      immatriculation,
      date_rdv,
      creneau_rdv,
      service,
      message,
      statut,
      prix,
      notes
    } = req.body;
    
    const reservation = await prisma.reservation.findUnique({
      where: { id },
    });
    
    if (!reservation) {
      return res.status(404).json({ message: 'Réservation non trouvée' });
    }
    
    // Préparer les données de mise à jour
    const updateData = {};
    
    // Ajouter seulement les champs fournis
    if (nom) updateData.nom = nom;
    if (prenom) updateData.prenom = prenom;
    if (email) updateData.email = email;
    if (telephone) updateData.telephone = telephone;
    if (adresse !== undefined) updateData.adresse = adresse;
    if (ville !== undefined) updateData.ville = ville;
    if (code_postal !== undefined) updateData.code_postal = code_postal;
    if (marque) updateData.marque = marque;
    if (modele) updateData.modele = modele;
    if (annee !== undefined) updateData.annee = annee ? parseInt(annee) : null;
    if (immatriculation !== undefined) updateData.immatriculation = immatriculation;
    if (date_rdv) updateData.date_rdv = new Date(date_rdv);
    if (creneau_rdv) updateData.creneau_rdv = creneau_rdv;
    if (service) updateData.service = service;
    if (message !== undefined) updateData.message = message;
    if (statut) updateData.statut = statut;
    if (prix !== undefined) updateData.prix = prix !== null ? parseFloat(prix) : null;
    if (notes !== undefined) updateData.notes = notes;
    
    // Mise à jour de la réservation
    const reservationMAJ = await prisma.reservation.update({
      where: { id },
      data: updateData,
    });
    
    res.json(reservationMAJ);
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de la réservation ${req.params.id}:`, error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la réservation', error: error.message });
  }
};

// Supprimer une réservation
export const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    
    const reservation = await prisma.reservation.findUnique({
      where: { id },
      include: { disponibilite: true, demandes_sav: true }
    });
    
    if (!reservation) {
      return res.status(404).json({ message: 'Réservation non trouvée' });
    }
    
    // Vérifier s'il y a des demandes SAV liées
    if (reservation.demandes_sav && reservation.demandes_sav.length > 0) {
      return res.status(409).json({ 
        message: 'Cette réservation ne peut pas être supprimée car des demandes SAV y sont liées',
        sav_count: reservation.demandes_sav.length
      });
    }
    
    // Libérer le créneau de disponibilité associé
    if (reservation.disponibilite_id) {
      await prisma.disponibilite.update({
        where: { id: reservation.disponibilite_id },
        data: { statut: 'DISPONIBLE' }
      });
    }
    
    // Supprimer la réservation
    await prisma.reservation.delete({
      where: { id },
    });
    
    res.json({ message: 'Réservation supprimée avec succès' });
  } catch (error) {
    console.error(`Erreur lors de la suppression de la réservation ${req.params.id}:`, error);
    res.status(500).json({ message: 'Erreur lors de la suppression de la réservation', error: error.message });
  }
};
