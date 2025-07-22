/**
 * Définitions de types pour les modèles de données
 * Ces types remplacent les anciens types Supabase et correspondent aux modèles Prisma
 */

export interface User {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  role: 'user' | 'admin';
  created_at: string;
  updated_at: string;
}

export interface Session {
  id: string;
  user_id: string;
  expires_at: string;
  created_at: string;
  user?: User;
}

export interface Ville {
  id: string;
  nom: string;
  slug: string;
  region?: string;
  departement?: string;
  code_postal?: string;
  population?: number;
  description?: string;
  image_url?: string;
  visites: number;
  meta_title?: string;
  meta_description?: string;
  introduction?: string;
  prix_diagnostic?: number; // Prix du diagnostic automobile à domicile, par défaut 99€
  prix_specifiques?: {
    // Champs conservés pour la compatibilité avec le code existant
    diagnostic_standard?: number;
    diagnostic_electronique?: number;
    inspection_pre_achat?: number;
    depannage_domicile?: number;
  };
  avantages_locaux?: string[];
  // Définition modifiée pour points_interet, qui dans l'utilisation semble être un objet et non un tableau
  points_interet?: {
    // Propriétés originales comme sous-propriétés s'il y en a
    lieux?: Array<{
      nom: string;
      description?: string;
      adresse?: string;
    }>;
    // Propriétés utilisées dans VilleDetail.tsx
    garages_partenaires?: string[];
    zone_intervention?: string;
  };
  services?: {
    // Service de diagnostic automobile uniquement
    diagnostic_auto?: boolean; // Indique si le service est disponible dans cette ville
    zone_intervention?: string; // Zone d'intervention autour de la ville
    garages_partenaires?: Array<{
      nom: string;
      adresse: string;
      telephone?: string;
    }>;
  };
  created_at: string;
  updated_at: string;
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
  prix?: number; // Prix du service réservé
  statut: 'en_attente' | 'confirmee' | 'annulee' | 'terminee';
  created_at: string;
  updated_at: string;
}

export interface DemandeSAV {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
  fichier_url?: string;
  statut: 'nouvelle' | 'en_cours' | 'resolue';
  created_at: string;
  updated_at: string;
}

export type StatutDisponible = 'disponible' | 'indisponible' | 'réservé' | 'bloque';

export interface Disponibilite {
  id: string;
  date: string;
  creneau: string;
  heure?: string;
  est_disponible: boolean;
  disponible?: boolean;
  region?: string;
  technicien?: string;
  statut?: StatutDisponible;
  date_debut?: string;
  date_fin?: string;
  reservation_id?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface PreReservation {
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
  statut?: 'en_attente' | 'confirmee' | 'annulee' | 'terminee';
}
