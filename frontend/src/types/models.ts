// frontend/src/types/models.ts
// Ce fichier contient toutes les interfaces/types partagés pour l'application

// --- Types pour les réservations ---
export interface PreReservationData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse?: string;
  ville: string;
  code_postal?: string;
  marque: string;
  modele: string;
  annee?: number;
  immatriculation?: string;
  date_rdv: string;
  creneau_rdv: string;
  service: string;
  message?: string;
  // Note: le statut sera probablement géré par le backend à la création
}

export interface Reservation {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse?: string;
  ville?: string;
  code_postal?: string;
  marque: string;
  modele: string;
  annee?: number;
  immatriculation?: string;
  date_rdv: string;
  creneau_rdv: string;
  service: string;
  message?: string;
  // Ajout des statuts utilisés dans l'interface Admin
  statut: 'en_attente' | 'confirmee' | 'annulee' | 'terminee' | 'confirme' | 'termine' | 'nouvelle';
  created_at: string;
  updated_at: string;
  prix?: number; // Assurez-vous que ce champ existe bien si votre backend le renvoie
  // Champs supplémentaires pour la compatibilité avec Admin.tsx
  marque_vehicule?: string;
  modele_vehicule?: string;
  annee_vehicule?: string;
  numero_vin?: string;
  type_prestation?: string;
  notes?: string;
}

// --- Types pour les villes ---
export interface Ville {
  id: string;
  nom: string;
  slug: string;
  region?: string;
  departement?: string;
  code_postal?: string;
  prix_specifiques: {
    diagnostic_standard: number;
    diagnostic_electronique: number;
    inspection_pre_achat: number;
    depannage_domicile: number;
    [key: string]: number;
  };
  // Champs SEO
  meta_title: string;
  meta_description: string;
  // Contenu
  introduction: string;
  avantages_locaux: string[];
  points_interet: {
    garages_partenaires?: string[];
    zone_intervention: string;
    [key: string]: any;
  };
  // Statistiques
  visites?: number;
  created_at?: string;
  updated_at?: string;
}

// --- Types pour le SAV ---
export interface DemandeSAVData {
  email: string;
  reservation_id?: string;
  description: string;
  // file_urls sera probablement géré par le backend après l'upload
}

export interface DemandeSAV {
  id: string;
  // Champs de base
  email: string;
  nom?: string;
  prenom?: string;
  telephone?: string;
  // Références
  reservation_id?: string;
  // Contenu de la demande
  description: string;
  sujet?: string;
  // Pièces jointes
  file_urls?: string[];
  fichier_url?: string; // Pour compatibilité avec l'Admin.tsx existant
  // Statut et dates
  statut: 'nouvelle' | 'en_cours' | 'resolue' | 'nouveau' | 'en_cours' | 'resolu';
  created_at: string;
}

// Type pour les statuts de disponibilité, partagé entre les interfaces
export type DisponibiliteStatut = 'disponible' | 'indisponible' | 'reserve' | 'bloque';

// --- Types pour la disponibilité (Calendrier) ---
export interface Disponibilite {
  id: string;
  date: string; // Ex: "YYYY-MM-DD"
  creneau: string; // Ex: "09:00-10:00"
  statut: DisponibiliteStatut;
  reservation_id?: string;
  date_debut?: string; // Format ISO pour compatibilité avec le composant Calendar
  date_fin?: string; // Format ISO pour compatibilité avec le composant Calendar
  notes?: string;
  // Autres champs pertinents comme technicien, etc.
}

// --- Type pour les événements du calendrier ---
export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  status: DisponibiliteStatut;
  reservationId?: string;
  notes?: string;
}

// --- Types pour l'info véhicule (VIN) ---
export interface VehicleInfo {
  make: string;
  model: string;
  year: number;
  // ... autres infos utiles
}
