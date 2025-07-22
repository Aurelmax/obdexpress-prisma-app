// controllers/villesController.js
import prisma from '../utils/prisma.js';

// Récupérer toutes les villes
export const getAllVilles = async (req, res) => {
  try {
    const villes = await prisma.ville.findMany({
      orderBy: {
        nom: 'asc',
      },
    });
    
    res.json(villes);
  } catch (error) {
    console.error('Erreur lors de la récupération des villes:', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des villes', error: error.message });
  }
};

// Récupérer une ville par son slug
export const getVilleBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    
    const ville = await prisma.ville.findUnique({
      where: {
        slug: slug,
      },
    });
    
    if (!ville) {
      return res.status(404).json({ message: 'Ville non trouvée' });
    }
    
    res.json(ville);
  } catch (error) {
    console.error(`Erreur lors de la récupération de la ville avec le slug ${req.params.slug}:`, error);
    res.status(500).json({ message: 'Erreur lors de la récupération de la ville', error: error.message });
  }
};

// Créer une nouvelle ville
export const createVille = async (req, res) => {
  try {
    const {
      nom,
      slug,
      region,
      departement,
      code_postal,
      prix_specifiques,
      meta_title,
      meta_description,
      introduction,
      avantages_locaux,
      points_interet
    } = req.body;
    
    // Validation basique
    if (!nom || !slug) {
      return res.status(400).json({ message: 'Le nom et le slug sont requis' });
    }
    
    // Vérification si le slug existe déjà
    const existingVille = await prisma.ville.findUnique({
      where: { slug },
    });
    
    if (existingVille) {
      return res.status(409).json({ message: 'Une ville avec ce slug existe déjà' });
    }
    
    const nouvelleVille = await prisma.ville.create({
      data: {
        nom,
        slug,
        region,
        departement,
        code_postal,
        prix_specifiques,
        meta_title: meta_title || `Diagnostic OBD à ${nom} - OBDExpress`,
        meta_description: meta_description || `Services de diagnostic OBD et électronique automobile à ${nom}. Prenez rendez-vous facilement avec nos techniciens.`,
        introduction: introduction || `Nos services de diagnostic automobile à ${nom}`,
        avantages_locaux: avantages_locaux || [],
        points_interet: points_interet || { zone_intervention: nom },
        visites: 0
      },
    });
    
    res.status(201).json(nouvelleVille);
  } catch (error) {
    console.error('Erreur lors de la création de la ville:', error);
    res.status(500).json({ message: 'Erreur lors de la création de la ville', error: error.message });
  }
};

// Incrémenter le compteur de visites
export const incrementVilleVisites = async (req, res) => {
  try {
    const { id } = req.params;
    
    const ville = await prisma.ville.findUnique({
      where: { id },
    });
    
    if (!ville) {
      return res.status(404).json({ message: 'Ville non trouvée' });
    }
    
    const updatedVille = await prisma.ville.update({
      where: { id },
      data: {
        visites: {
          increment: 1,
        },
      },
    });
    
    res.json({ visites: updatedVille.visites });
  } catch (error) {
    console.error(`Erreur lors de l'incrémentation des visites pour la ville ${req.params.id}:`, error);
    res.status(500).json({ message: "Erreur lors de l'incrémentation des visites", error: error.message });
  }
};

// Mettre à jour une ville
export const updateVille = async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      nom, 
      slug, 
      region, 
      departement, 
      code_postal, 
      prix_specifiques,
      meta_title,
      meta_description,
      introduction,
      avantages_locaux,
      points_interet
    } = req.body;
    
    // Vérification si la ville existe
    const existingVille = await prisma.ville.findUnique({
      where: { id },
    });
    
    if (!existingVille) {
      return res.status(404).json({ message: 'Ville non trouvée' });
    }
    
    // Si le slug est modifié, vérifier qu'il n'existe pas déjà
    if (slug && slug !== existingVille.slug) {
      const villeAvecSlug = await prisma.ville.findUnique({
        where: { slug },
      });
      
      if (villeAvecSlug && villeAvecSlug.id !== id) {
        return res.status(409).json({ message: 'Une autre ville utilise déjà ce slug' });
      }
    }
    
    // Mise à jour de la ville
    const villeMAJ = await prisma.ville.update({
      where: { id },
      data: {
        ...(nom && { nom }),
        ...(slug && { slug }),
        ...(region && { region }),
        ...(departement && { departement }),
        ...(code_postal && { code_postal }),
        ...(prix_specifiques && { prix_specifiques }),
        ...(meta_title && { meta_title }),
        ...(meta_description && { meta_description }),
        ...(introduction && { introduction }),
        ...(avantages_locaux && { avantages_locaux }),
        ...(points_interet && { points_interet })
      },
    });
    
    res.json(villeMAJ);
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de la ville ${req.params.id}:`, error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la ville', error: error.message });
  }
};

// Supprimer une ville
export const deleteVille = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Vérification si la ville existe
    const existingVille = await prisma.ville.findUnique({
      where: { id },
    });
    
    if (!existingVille) {
      return res.status(404).json({ message: 'Ville non trouvée' });
    }
    
    // Vérifier si des disponibilités sont liées à cette ville
    const disponibilitesLiees = await prisma.disponibilite.count({
      where: { ville_id: id },
    });
    
    if (disponibilitesLiees > 0) {
      return res.status(409).json({ 
        message: 'Impossible de supprimer cette ville car des disponibilités y sont liées', 
        count: disponibilitesLiees 
      });
    }
    
    // Suppression de la ville
    await prisma.ville.delete({
      where: { id },
    });
    
    res.json({ message: 'Ville supprimée avec succès' });
  } catch (error) {
    console.error(`Erreur lors de la suppression de la ville ${req.params.id}:`, error);
    res.status(500).json({ message: 'Erreur lors de la suppression de la ville', error: error.message });
  }
};
