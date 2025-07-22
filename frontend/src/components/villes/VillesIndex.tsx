import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { fetchVilles } from '@/services/api';
import type { Ville } from '@/types/models';

const VillesIndex = () => {
  const [villes, setVilles] = useState<Ville[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const siteUrl = import.meta.env.VITE_PUBLIC_SITE_URL || window.location.origin;

  useEffect(() => {
    const loadVilles = async () => {
      try {
        // Utiliser le service API au lieu de Supabase
        const data = await fetchVilles();
        
        // Trier les villes par nom si nécessaire (au cas où l'API ne les renvoie pas déjà triées)
        const sortedVilles = [...data].sort((a, b) => a.nom.localeCompare(b.nom));
        
        setVilles(sortedVilles);
        setLoading(false);
      } catch (err) {
        console.error('Erreur lors de la récupération des villes:', err);
        setError('Une erreur est survenue lors du chargement des villes. Veuillez réessayer plus tard.');
        setLoading(false);
      }
    };

    loadVilles();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto py-16">
        <h1 className="text-2xl font-bold mb-8">Chargement des villes...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-16">
        <h1 className="text-2xl font-bold mb-4">Erreur</h1>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Diagnostic automobile à domicile - Toutes les villes | Azur Auto Réserve</title>
        <meta name="description" content="Service de diagnostic automobile à domicile dans toutes les villes de la Côte d'Azur. Nos experts se déplacent chez vous pour identifier et résoudre les problèmes de votre véhicule." />
        <link rel="canonical" href={`${siteUrl}/villes`} />
      </Helmet>

      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8">Nos services de diagnostic automobile à domicile par ville</h1>
        
        <p className="mb-8 text-lg">
          Azur Auto Réserve propose des services de diagnostic automobile à domicile dans de nombreuses villes de la région. 
          Sélectionnez votre ville pour découvrir nos services adaptés à votre localité.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {villes.map((ville) => (
            <Link 
              key={ville.id} 
              to={`/villes/${ville.slug}`}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-2">{ville.nom}</h2>
              <p className="text-gray-600">{ville.departement} ({ville.code_postal})</p>
              <p className="mt-4">Diagnostic automobile à domicile à {ville.nom}</p>
              <p className="mt-2 text-blue-600 font-medium">
                À partir de {ville.prix_specifiques.diagnostic_standard}€
              </p>
            </Link>
          ))}
        </div>

        {villes.length === 0 && (
          <p className="text-gray-500">Aucune ville disponible pour le moment.</p>
        )}
      </div>
    </>
  );
};

export default VillesIndex;
