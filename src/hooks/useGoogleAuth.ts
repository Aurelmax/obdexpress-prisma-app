import { useState, useCallback, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface GoogleUserInfo {
  id: string;
  email: string;
  name: string;
  picture: string;
  role: string;
}

interface GoogleAuthResponse {
  loading: boolean;
  error: Error | null;
  user: GoogleUserInfo | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

export function useGoogleAuth(): [
  GoogleAuthResponse, 
  () => void,
  () => void
] {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [user, setUser] = useState<GoogleUserInfo | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  
  // Vérifier le statut d'authentification au chargement
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Appeler l'API backend pour vérifier l'authentification actuelle
        const response = await axios.get('/api/auth/me', {
          withCredentials: true // Important pour inclure les cookies
        });
        
        if (response.data.authenticated && response.data.user) {
          setUser(response.data.user);
          setIsAuthenticated(true);
          setIsAdmin(['ADMIN', 'SUPER_ADMIN'].includes(response.data.user.role));
        } else {
          // Pas authentifié mais pas d'erreur
          setUser(null);
          setIsAuthenticated(false);
          setIsAdmin(false);
        }
      } catch (err) {
        // Erreur de communication avec l'API, mais pas forcément une erreur d'authentification
        console.error('Erreur lors de la vérification de l\'authentification:', err);
        setUser(null);
        setIsAuthenticated(false);
        setIsAdmin(false);
      }
    };
    
    checkAuthStatus();
  }, []);
  
  // Function to handle the login process
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setLoading(true);
      setError(null);
      
      try {
        // Envoi du token Google à notre backend pour vérification
        const response = await axios.post('/api/auth/google', {
          token: tokenResponse.code // En utilisant le flux 'auth-code', nous recevons un code
        }, {
          withCredentials: true // Important pour recevoir le cookie
        });
        
        if (response.data.user) {
          setUser(response.data.user);
          setIsAuthenticated(true);
          setIsAdmin(['ADMIN', 'SUPER_ADMIN'].includes(response.data.user.role));
        }
      } catch (err) {
        console.error('Erreur d\'authentification:', err);
        setError(err instanceof Error ? err : new Error('Authentification échouée'));
        setIsAuthenticated(false);
        setIsAdmin(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    },
    onError: (errorResponse) => {
      setError(new Error(errorResponse.error_description || 'Échec de la connexion Google'));
      setLoading(false);
    },
    flow: 'auth-code', // Utiliser le flux de code d'autorisation qui renvoie un id_token
  });

  // Function to handle logout
  const logout = useCallback(async () => {
    setLoading(true);
    try {
      // Appeler l'API backend pour déconnecter l'utilisateur
      await axios.post('/api/auth/logout', {}, {
        withCredentials: true // Important pour inclure le cookie
      });
      
      setUser(null);
      setIsAuthenticated(false);
      setIsAdmin(false);
      navigate('/'); // Rediriger vers la page d'accueil
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Échec de la déconnexion'));
      // Même en cas d'erreur, on réinitialise l'état local
      setUser(null);
      setIsAuthenticated(false);
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  return [{ loading, error, user, isAuthenticated, isAdmin }, login, logout];
}
