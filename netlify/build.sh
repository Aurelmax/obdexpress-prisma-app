#!/bin/bash

# Script post-build pour Netlify
# Ce script s'exécute après le build standard de l'application

echo "📦 Installation des dépendances pour les fonctions Netlify..."
cd functions
npm install

echo "🔨 Génération du client Prisma pour l'environnement serverless..."
npx prisma generate

echo "📋 Copie des fichiers nécessaires pour Prisma..."
mkdir -p node_modules/.prisma
cp -r ../../node_modules/.prisma/* node_modules/.prisma/ || true

echo "✅ Configuration Netlify Functions terminée!"
