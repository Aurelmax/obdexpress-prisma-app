import { GoogleOAuthProvider } from '@react-oauth/google';
import { ReactNode } from 'react';

interface GoogleAuthProviderProps {
  children: ReactNode;
}

/**
 * Provider component that initializes the Google OAuth client
 */
export const GoogleAuthProvider = ({ children }: GoogleAuthProviderProps) => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  
  if (!clientId) {
    console.error('Google Client ID is not defined in environment variables');
    return <>{children}</>; // Render children anyway to prevent breaking the app
  }
  
  return (
    <GoogleOAuthProvider clientId={clientId}>
      {children}
    </GoogleOAuthProvider>
  );
};
