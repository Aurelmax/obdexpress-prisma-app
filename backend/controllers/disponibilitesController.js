// controllers/disponibilitesController.js
import prisma from '../utils/prisma.js';

// Récupérer toutes les disponibilités
export const getAllDisponibilites = async (req, res) => {
  try {
    const disponibilites = await prisma.disponibilite.findMany({
      include: {
        technicien: {
          select: {
            id: true,
            nom: true,
            prenom: true,
            email: true
          }
        },
        ville: {
          select: {
            id: true,
            nom: true,
            slug: true
          }
        }
      },
      orderBy: {
        date: 'asc'
      }
    });
    
    res.json(disponibilites);
  } catch (error) {
    console.error('Erreur lors de la récupération des disponibilités:', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des disponibilités', error: error.message });
  }
};

// Récupérer les disponibilités par période (pour le calendrier)
export const getDisponibilitesByPeriod = async (req, res) => {
  try {
    const { start, end, ville_id } = req.query;
    
    if (!start || !end) {
      return res.status(400).json({ message: 'Les paramètres start et end sont requis' });
    }
    
    const startDate = new Date(start);
    const endDate = new Date(end);
    
    // Vérifier que les dates sont valides
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return res.status(400).json({ message: 'Dates invalides' });
    }
    
    // Construire la requête avec des filtres conditionnels
    const query = {
      where: {
        date: {
          gte: startDate,
          lte: endDate
        },
        ...(ville_id && { ville_id: ville_id })
      },
      include: {
        technicien: {
          select: {
            id: true,
            nom: true,
            prenom: true
          }
        },
        ville: {
          select: {
            id: true,
            nom: true,
            slug: true
          }
        }
      },
      orderBy: {
        date: 'asc'
      }
    };
    
    const disponibilites = await prisma.disponibilite.findMany(query);
    
    // Formater les disponibilités pour le calendrier frontend
    const formattedDisponibilites = disponibilites.map(dispo => {
      return {
        ...dispo,
        date_debut: dispo.date_debut || dispo.date, // Compatibilité avec le frontend
        date_fin: dispo.date_fin || new Date(dispo.date.getTime() + 3600000), // Ajouter 1h par défaut si date_fin n'existe pas
        titre: `${dispo.creneau} - ${dispo.statut}`
      };
    });
    
    res.json(formattedDisponibilites);
  } catch (error) {
    console.error('Erreur lors de la récupération des disponibilités par période:', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des disponibilités', error: error.message });
  }
};

// Récupérer les créneaux disponibles pour une date et une ville
export const getAvailableTimeSlots = async (req, res) => {
  try {
    const { date, ville_id } = req.query;
    
    if (!date) {
      return res.status(400).json({ message: 'Le paramètre date est requis' });
    }
    
    const searchDate = new Date(date);
    searchDate.setHours(0, 0, 0, 0); // Début de la journée
    const endOfDay = new Date(searchDate);
    endOfDay.setHours(23, 59, 59, 999); // Fin de la journée
    
    // Vérifier que la date est valide
    if (isNaN(searchDate.getTime())) {
      return res.status(400).json({ message: 'Date invalide' });
    }
    
    // Construire la requête avec des filtres conditionnels
    const query = {
      where: {
        date: {
          gte: searchDate,
          lte: endOfDay
        },
        statut: 'DISPONIBLE', // Seulement les créneaux disponibles
        ...(ville_id && { ville_id: ville_id })
      },
      include: {
        ville: {
          select: {
            id: true,
            nom: true,
            slug: true
          }
        }
      },
      orderBy: {
        date: 'asc'
      }
    };
    
    const disponibilites = await prisma.disponibilite.findMany(query);
    
    res.json(disponibilites);
  } catch (error) {
    console.error('Erreur lors de la récupération des créneaux disponibles:', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des créneaux disponibles', error: error.message });
  }
};

// Créer une nouvelle disponibilité
export const createDisponibilite = async (req, res) => {
  try {
    const {
      date,
      creneau,
      statut = 'DISPONIBLE',
      notes,
      technicien_id,
      ville_id
    } = req.body;
    
    // Validation basique
    if (!date || !creneau) {
      return res.status(400).json({ message: 'La date et le créneau sont requis' });
    }
    
    const dateObj = new Date(date);
    
    // Vérifier que la date est valide
    if (isNaN(dateObj.getTime())) {
      return res.status(400).json({ message: 'Date invalide' });
    }
    
    // Extraire les heures de début et de fin du créneau (format: "HH:MM-HH:MM")
    const [debut, fin] = creneau.split('-').map(time => {
      const [hours, minutes] = time.trim().split(':').map(Number);
      const date = new Date(dateObj);
      date.setHours(hours, minutes, 0, 0);
      return date;
    });
    
    // Vérifier si un créneau similaire existe déjà pour cette date et ce technicien
    if (technicien_id) {
      const existingCreneau = await prisma.disponibilite.findFirst({
        where: {
          date: {
            equals: dateObj
          },
          creneau: {
            equals: creneau
          },
          technicien_id: {
            equals: technicien_id
          }
        }
      });
      
      if (existingCreneau) {
        return res.status(409).json({ message: 'Ce créneau existe déjà pour ce technicien' });
      }
    }
    
    // Créer la disponibilité
    const nouvelleDisponibilite = await prisma.disponibilite.create({
      data: {
        date: dateObj,
        creneau,
        statut,
        date_debut: debut,
        date_fin: fin,
        notes,
        ...(technicien_id && { technicien: { connect: { id: technicien_id } } }),
        ...(ville_id && { ville: { connect: { id: ville_id } } })
      },
      include: {
        technicien: {
          select: {
            id: true,
            nom: true,
            prenom: true
          }
        },
        ville: {
          select: {
            id: true,
            nom: true,
            slug: true
          }
        }
      }
    });
    
    res.status(201).json(nouvelleDisponibilite);
  } catch (error) {
    console.error('Erreur lors de la création de la disponibilité:', error);
    res.status(500).json({ message: 'Erreur lors de la création de la disponibilité', error: error.message });
  }
};

// Mettre à jour une disponibilité
export const updateDisponibilite = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      date,
      creneau,
      statut,
      notes,
      technicien_id,
      ville_id
    } = req.body;
    
    const disponibilite = await prisma.disponibilite.findUnique({
      where: { id },
      include: { reservation: true }
    });
    
    if (!disponibilite) {
      return res.status(404).json({ message: 'Disponibilité non trouvée' });
    }
    
    // Vérifier si cette disponibilité est associée à une réservation
    if (disponibilite.reservation && (date || creneau || statut === 'DISPONIBLE')) {
      return res.status(409).json({
        message: 'Cette disponibilité est associée à une réservation et certaines modifications sont restreintes',
        reservation_id: disponibilite.reservation.id
      });
    }
    
    let date_debut = disponibilite.date_debut;
    let date_fin = disponibilite.date_fin;
    
    // Si le créneau change, recalculer date_debut et date_fin
    if (creneau) {
      const baseDate = date ? new Date(date) : disponibilite.date;
      
      if (isNaN(baseDate.getTime())) {
        return res.status(400).json({ message: 'Date invalide' });
      }
      
      const [debut, fin] = creneau.split('-').map(time => {
        const [hours, minutes] = time.trim().split(':').map(Number);
        const newDate = new Date(baseDate);
        newDate.setHours(hours, minutes, 0, 0);
        return newDate;
      });
      
      date_debut = debut;
      date_fin = fin;
    } else if (date) {
      // Si seule la date change, ajuster date_debut et date_fin en conservant les heures
      const newDate = new Date(date);
      
      if (isNaN(newDate.getTime())) {
        return res.status(400).json({ message: 'Date invalide' });
      }
      
      date_debut = new Date(newDate);
      date_debut.setHours(
        disponibilite.date_debut.getHours(),
        disponibilite.date_debut.getMinutes(),
        0, 0
      );
      
      date_fin = new Date(newDate);
      date_fin.setHours(
        disponibilite.date_fin.getHours(),
        disponibilite.date_fin.getMinutes(),
        0, 0
      );
    }
    
    // Mise à jour de la disponibilité
    const updatedDisponibilite = await prisma.disponibilite.update({
      where: { id },
      data: {
        ...(date && { date: new Date(date) }),
        ...(creneau && { creneau }),
        ...(statut && { statut }),
        date_debut,
        date_fin,
        ...(notes !== undefined && { notes }),
        ...(technicien_id && { technicien: { connect: { id: technicien_id } } }),
        ...(ville_id && { ville: { connect: { id: ville_id } } })
      },
      include: {
        technicien: {
          select: {
            id: true,
            nom: true,
            prenom: true
          }
        },
        ville: {
          select: {
            id: true,
            nom: true,
            slug: true
          }
        }
      }
    });
    
    res.json(updatedDisponibilite);
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de la disponibilité ${req.params.id}:`, error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la disponibilité', error: error.message });
  }
};

// Supprimer une disponibilité
export const deleteDisponibilite = async (req, res) => {
  try {
    const { id } = req.params;
    
    const disponibilite = await prisma.disponibilite.findUnique({
      where: { id },
      include: { reservation: true }
    });
    
    if (!disponibilite) {
      return res.status(404).json({ message: 'Disponibilité non trouvée' });
    }
    
    // Vérifier si cette disponibilité est associée à une réservation
    if (disponibilite.reservation) {
      return res.status(409).json({
        message: 'Impossible de supprimer cette disponibilité car elle est associée à une réservation',
        reservation_id: disponibilite.reservation.id
      });
    }
    
    // Supprimer la disponibilité
    await prisma.disponibilite.delete({
      where: { id }
    });
    
    res.json({ message: 'Disponibilité supprimée avec succès' });
  } catch (error) {
    console.error(`Erreur lors de la suppression de la disponibilité ${req.params.id}:`, error);
    res.status(500).json({ message: 'Erreur lors de la suppression de la disponibilité', error: error.message });
  }
};

// Générer des créneaux pour une période
export const generateTimeSlots = async (req, res) => {
  try {
    const { 
      startDate, 
      endDate, 
      startTime, 
      endTime, 
      interval, 
      excludedDays,
      ville_id,
      technicien_id
    } = req.body;
    
    // Validation basique
    if (!startDate || !endDate || !startTime || !endTime || !interval) {
      return res.status(400).json({ 
        message: 'Paramètres manquants', 
        required: ['startDate', 'endDate', 'startTime', 'endTime', 'interval']
      });
    }
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Vérifier que les dates sont valides
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return res.status(400).json({ message: 'Dates invalides' });
    }
    
    // Extraire les heures et minutes
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);
    const intervalMinutes = parseInt(interval);
    
    // Tableau pour stocker les créneaux générés
    const generatedSlots = [];
    const createdSlots = [];
    
    // Parcourir chaque jour de la période
    const currentDate = new Date(start);
    currentDate.setHours(0, 0, 0, 0);
    
    while (currentDate <= end) {
      // Vérifier si ce jour doit être exclu
      const dayOfWeek = currentDate.getDay(); // 0 = dimanche, 1 = lundi, etc.
      if (!excludedDays || !excludedDays.includes(dayOfWeek.toString())) {
        // Générer les créneaux pour cette journée
        const slots = [];
        let currentTime = new Date(currentDate);
        currentTime.setHours(startHour, startMinute, 0, 0);
        
        const endTimeToday = new Date(currentDate);
        endTimeToday.setHours(endHour, endMinute, 0, 0);
        
        while (currentTime < endTimeToday) {
          const slotStart = new Date(currentTime);
          
          // Calculer l'heure de fin du créneau
          const slotEnd = new Date(currentTime);
          slotEnd.setMinutes(slotEnd.getMinutes() + intervalMinutes);
          
          // Format du créneau: "HH:MM-HH:MM"
          const formattedStart = `${slotStart.getHours().toString().padStart(2, '0')}:${slotStart.getMinutes().toString().padStart(2, '0')}`;
          const formattedEnd = `${slotEnd.getHours().toString().padStart(2, '0')}:${slotEnd.getMinutes().toString().padStart(2, '0')}`;
          const creneau = `${formattedStart}-${formattedEnd}`;
          
          slots.push({
            date: new Date(currentDate),
            creneau,
            date_debut: slotStart,
            date_fin: slotEnd,
            statut: 'DISPONIBLE',
            ...(ville_id && { ville: { connect: { id: ville_id } } }),
            ...(technicien_id && { technicien: { connect: { id: technicien_id } } })
          });
          
          // Passer au créneau suivant
          currentTime.setMinutes(currentTime.getMinutes() + intervalMinutes);
        }
        
        generatedSlots.push(...slots);
      }
      
      // Passer au jour suivant
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    // Créer les créneaux en base de données
    for (const slot of generatedSlots) {
      // Vérifier si le créneau existe déjà
      const existingSlot = await prisma.disponibilite.findFirst({
        where: {
          date: {
            equals: slot.date
          },
          creneau: {
            equals: slot.creneau
          },
          ...(ville_id && { ville_id }),
          ...(technicien_id && { technicien_id })
        }
      });
      
      if (!existingSlot) {
        const created = await prisma.disponibilite.create({
          data: {
            date: slot.date,
            creneau: slot.creneau,
            date_debut: slot.date_debut,
            date_fin: slot.date_fin,
            statut: slot.statut,
            ...(ville_id && { ville: { connect: { id: ville_id } } }),
            ...(technicien_id && { technicien: { connect: { id: technicien_id } } })
          }
        });
        
        createdSlots.push(created);
      }
    }
    
    res.status(201).json({
      message: `${createdSlots.length} créneaux générés avec succès`,
      totalGenerated: generatedSlots.length,
      created: createdSlots.length,
      createdSlots
    });
  } catch (error) {
    console.error('Erreur lors de la génération des créneaux:', error);
    res.status(500).json({ message: 'Erreur lors de la génération des créneaux', error: error.message });
  }
};
