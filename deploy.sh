#!/bin/bash

# Script de déploiement rapide sur Vercel

echo "🚀 Déploiement Carineland sur Vercel"
echo "======================================"
echo ""

# Vérifier si Vercel CLI est installé
if ! command -v vercel &> /dev/null
then
    echo "❌ Vercel CLI n'est pas installé."
    echo "📦 Installation de Vercel CLI..."
    npm install -g vercel
    echo "✅ Vercel CLI installé!"
    echo ""
fi

# Demander le type de déploiement
echo "Choisissez le type de déploiement:"
echo "1) Preview (test)"
echo "2) Production"
echo ""
read -p "Votre choix (1 ou 2): " choice

case $choice in
  1)
    echo ""
    echo "📤 Déploiement en mode preview..."
    vercel
    ;;
  2)
    echo ""
    echo "📤 Déploiement en production..."
    vercel --prod
    ;;
  *)
    echo "❌ Choix invalide. Utilisez 1 ou 2."
    exit 1
    ;;
esac

echo ""
echo "✅ Déploiement terminé!"
echo "🌐 Votre site est maintenant en ligne!"
