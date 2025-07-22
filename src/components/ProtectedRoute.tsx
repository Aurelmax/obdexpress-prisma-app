import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getCurrentSession } from "../../frontend/src/services/api";
import { Session } from "../../frontend/src/types/models";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Vérifier la session actuelle avec l'API Express
    const checkSession = async () => {
      try {
        const currentSession = await getCurrentSession();
        setSession(currentSession);
      } catch (error) {
        setSession(null);
      } finally {
        setLoading(false);
      }
    };
    
    checkSession();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Vérification des permissions...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/admin/auth" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;