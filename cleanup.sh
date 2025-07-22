#!/bin/bash

# Définir le chemin racine du projet
PROJECT_ROOT=$(dirname "$(realpath "$0")")
cd "$PROJECT_ROOT"

echo "Démarrage du nettoyage du projet..."

# --- 1. Nettoyage des dossiers et fichiers spécifiques à Supabase ---
echo "1. Nettoyage des résidus Supabase..."
# Supprimer le dossier supabase dans le backend
if [ -d "backend/supabase" ]; then
    echo "  - Suppression du dossier backend/supabase..."
    rm -rf "backend/supabase"
else
    echo "  - backend/supabase non trouvé, pas de suppression nécessaire."
fi

# Supprimer les variables Supabase des fichiers .env
for env_file in ".env" ".env.example" "backend/.env" "backend/.env.example"; do
    if [ -f "$env_file" ]; then
        echo "  - Nettoyage des variables Supabase dans $env_file..."
        # Utilise sed pour supprimer les lignes contenant SUPABASE_URL ou SUPABASE_ANON_KEY
        # Le -i.bak crée une sauvegarde, pour éviter cela utilisez juste -i si vous êtes sûr.
        # Pour macOS, sed -i ""
        # Pour Linux, sed -i
        if [[ "$OSTYPE" == "darwin"* ]]; then # macOS
            sed -i "" '/^SUPABASE_URL=/d; /^SUPABASE_ANON_KEY=/d' "$env_file"
        else # Linux
            sed -i '/^SUPABASE_URL=/d; /^SUPABASE_ANON_KEY=/d' "$env_file"
        fi
    fi
done

# --- 2. Nettoyage des résidus Docker/Coolify ---
echo "2. Nettoyage des résidus Docker/Coolify..."
# Fichiers Docker courants
docker_files=("Dockerfile" "docker-compose.yml" "docker-compose.yaml" ".dockerignore")
for file in "${docker_files[@]}"; do
    if [ -f "$file" ]; then
        echo "  - Suppression du fichier $file..."
        rm -f "$file"
    else
        echo "  - $file non trouvé."
    fi
done

# Dossiers spécifiques à Coolify/déploiement précédent
coolify_dirs=("coolify/" "deploy/coolify/") # Ajoutez d'autres si vous en avez
for dir in "${coolify_dirs[@]}"; do
    if [ -d "$dir" ]; then
        echo "  - Suppression du dossier $dir..."
        rm -rf "$dir"
    else
        echo "  - $dir non trouvé."
    fi
done

# --- 3. Nettoyage des variables RapidAPI ---
echo "3. Nettoyage des variables RapidAPI..."
for env_file in ".env" ".env.example" "backend/.env" "backend/.env.example"; do
    if [ -f "$env_file" ]; then
        echo "  - Nettoyage des variables RapidAPI dans $env_file..."
        if [[ "$OSTYPE" == "darwin"* ]]; then # macOS
            sed -i "" '/RAPIDAPI_KEY/d; /RAPIDAPI_HOST/d; /PLATE_API_KEY/d' "$env_file"
        else # Linux
            sed -i '/RAPIDAPI_KEY/d; /RAPIDAPI_HOST/d; /PLATE_API_KEY/d' "$env_file"
        fi
    fi
done

# --- 4. Nettoyage des caches et dépendances ---
echo "4. Nettoyage des caches et dépendances..."
# Cache Netlify CLI
if [ -d ".netlify" ]; then
    echo "  - Suppression du dossier .netlify (cache Netlify CLI)..."
    rm -rf ".netlify"
else
    echo "  - .netlify non trouvé."
fi

# Cache Vite dans node_modules/.vite
if [ -d "node_modules/.vite" ]; then
    echo "  - Suppression du cache Vite (node_modules/.vite)..."
    rm -rf "node_modules/.vite"
else
    echo "  - Cache Vite non trouvé."
fi

# Supprimer node_modules et package-lock.json pour une réinitialisation propre
if [ -d "node_modules" ]; then
    echo "  - Suppression de node_modules..."
    rm -rf "node_modules"
else
    echo "  - node_modules non trouvé."
fi

if [ -f "package-lock.json" ]; then
    echo "  - Suppression de package-lock.json..."
    rm -f "package-lock.json"
else
    echo "  - package-lock.json non trouvé."
fi

# --- 5. Réinstallation des dépendances ---
echo "5. Réinstallation des dépendances..."
echo "  - Lancement de npm install à la racine du projet..."
npm install

# Si vous avez un package.json séparé dans le backend, décommentez et adaptez:
# if [ -d "backend" ] && [ -f "backend/package.json" ]; then
#     echo "  - Lancement de npm install dans le backend..."
#     (cd backend && npm install)
# fi

echo "Nettoyage terminé ! Votre projet est maintenant propre."
echo "Vous pouvez maintenant relancer votre environnement de développement (npx netlify dev)."