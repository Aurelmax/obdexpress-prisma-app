// frontend/src/services/api.ts
import axios from 'axios';
import {
  PreReservationData,
  Reservation,
  Ville,
  DemandeSAVData,
  DemandeSAV,
  Disponibilite,
  VehicleInfo,
  User,
  Session
} from '../types/models';

// Configurez l'instance d'Axios.
// En développement, les appels à '/api' seront souvent gérés par un proxy (ex: dans vite.config.ts)
// qui redirigera vers votre serveur Express local (par exemple sur le port 3000 ou 5000).
// En production (déploiement sur Vercel), les appels '/api' seront automatiquement routés
// vers vos Serverless Functions Vercel (qui exécuteront votre code Express).
const apiClient = axios.create({
  baseURL: '/api', // C'est la base de vos URLs d'API (ex: /api/reservations, /api/villes)
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Important pour l'authentification basée sur les cookies
});

// --- Fonctions API pour l'authentification ---

// Connexion avec email/mot de passe
export const loginWithEmail = async (email: string, password: string): Promise<Session> => {
  const response = await apiClient.post('/auth/login', { email, password });
  return response.data;
};

// Récupérer la session courante
export const getCurrentSession = async (): Promise<Session | null> => {
  try {
    const response = await apiClient.get('/auth/session');
    return response.data;
  } catch (error) {
    return null;
  }
};

// Déconnexion
export const logout = async (): Promise<void> => {
  await apiClient.post('/auth/logout');
};

// --- Fonctions API pour les Réservations ---

// Récupérer toutes les réservations (pour l'admin par exemple)
export const fetchReservations = async (): Promise<Reservation[]> => {
  const response = await apiClient.get('/reservations');
  return response.data;
};

// Créer une nouvelle réservation
export const createReservation = async (data: PreReservationData): Promise<Reservation> => {
  const response = await apiClient.post('/reservations', data);
  return response.data;
};

// Mettre à jour le statut d'une réservation
export const updateReservationStatus = async (id: string, statut: Reservation['statut']): Promise<Reservation> => {
  const response = await apiClient.put(`/reservations/${id}/status`, { statut });
  return response.data;
};

// --- Fonctions API pour les Villes ---

export const fetchVilles = async (): Promise<Ville[]> => {
  const response = await apiClient.get('/villes');
  return response.data;
};

export const fetchVilleBySlug = async (slug: string): Promise<Ville> => {
  const response = await apiClient.get(`/villes/${slug}`);
  return response.data;
};

export const incrementVilleVisites = async (id: string): Promise<Ville> => {
  const response = await apiClient.put(`/villes/${id}/increment-visites`);
  return response.data;
};

// --- Fonctions API pour le SAV ---

export const fetchSavClaims = async (): Promise<DemandeSAV[]> => {
  const response = await apiClient.get('/sav-claims');
  return response.data;
};

export const submitSavRequest = async (data: DemandeSAVData): Promise<DemandeSAV> => {
  const response = await apiClient.post('/sav-claims', data);
  return response.data;
};

export const updateSavStatus = async (id: string, statut: DemandeSAV['statut']): Promise<DemandeSAV> => {
  const response = await apiClient.put(`/sav-claims/${id}/status`, { statut });
  return response.data;
};

// --- Fonctions API pour la Disponibilité (Calendrier) ---

export const getAvailableTimeSlots = async (villeId?: string, serviceType?: string): Promise<Disponibilite[]> => {
  const params = { villeId, serviceType }; // Envoyer des paramètres de requête si nécessaire
  const response = await apiClient.get('/disponibilites', { params });
  return response.data;
};

// --- Fonctions API pour l'info véhicule (VIN) ---

export const getVehicleInfoByVin = async (vin: string): Promise<VehicleInfo> => {
  const response = await apiClient.get(`/vehicle-info/${vin}`);
  return response.data;
};

// --- Fonctions API pour le paiement (futur) ---
// Ces fonctions appelleraient les endpoints de votre backend qui interagissent avec Stripe/PayPal
export const createPaymentIntent = async (reservationId: string, amount: number) => {
  const response = await apiClient.post('/payments/create-intent', { reservationId, amount });
  return response.data; // Devrait retourner un client_secret pour Stripe par exemple
};

// --- Fonctions API pour l'authentification (si vous en ajoutez pour l'admin) ---
// C'est un exemple, les détails dépendront de votre implémentation d'authentification
export const loginAdmin = async (credentials: any) => {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
};

// --- Fonctions API pour la géolocalisation ---

// Obtenir la position actuelle de l'utilisateur
export const getUserLocation = async (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('La géolocalisation n\'est pas prise en charge par ce navigateur.'));
    } else {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    }
  });
};

// Faire un geocodage inverse pour obtenir l'adresse à partir de coordonnées
export const reverseGeocode = async (latitude: number, longitude: number): Promise<any> => {
  try {
    // Utiliser une API publique pour le géocodage inverse
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=fr`
    );
    
    if (!response.ok) {
      throw new Error(`Erreur de géocodage: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Erreur lors du géocodage inverse:', error);
    throw error;
  }
};

// ... autres fonctions génériques d'API si nécessaire