# Déploiement sur Vercel

Ce guide vous aidera à déployer le projet Carineland sur Vercel.

## 🚀 Méthode 1: Déploiement via GitHub (Recommandé)

### Prérequis

- Un compte [Vercel](https://vercel.com)
- Le projet pushé sur GitHub

### Étapes

1. **Connectez-vous à Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "Sign Up" ou "Log In"
   - Connectez-vous avec votre compte GitHub

2. **Importez votre projet**
   - Cliquez sur "Add New..." → "Project"
   - Sélectionnez le repository `ujju16/carineland`
   - Cliquez sur "Import"

3. **Configuration du projet**

   ```
   Project Name: carineland
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

4. **Variables d'environnement** (optionnel)
   - Ajoutez les variables d'environnement nécessaires
   - Exemple:
     ```
     NEXT_PUBLIC_SITE_URL=https://carineland.vercel.app
     ```

5. **Déployez**
   - Cliquez sur "Deploy"
   - Attendez quelques minutes
   - Votre site sera disponible sur une URL comme: `carineland.vercel.app`

## 🔄 Déploiement Automatique

Après la configuration initiale:

- Chaque push sur `main` déclenchera un déploiement automatique en production
- Chaque push sur d'autres branches créera un aperçu de déploiement (preview)
- Les pull requests auront également leurs propres aperçus

## 📱 Méthode 2: Déploiement via CLI Vercel

### Installation de Vercel CLI

```bash
npm install -g vercel
```

### Déploiement

```bash
# Login
vercel login

# Déployer en preview
vercel

# Déployer en production
vercel --prod
```

## ⚙️ Configuration Personnalisée

Le fichier `vercel.json` contient la configuration du déploiement:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

## 🔒 Variables d'Environnement

### Via Dashboard Vercel

1. Allez dans "Settings" → "Environment Variables"
2. Ajoutez vos variables:
   - `NEXT_PUBLIC_SITE_URL`: URL de votre site
   - Autres variables selon vos besoins

### Via CLI

```bash
vercel env add NEXT_PUBLIC_SITE_URL production
```

## 🌐 Domaine Personnalisé

### Ajouter un domaine personnalisé

1. Dans le dashboard Vercel, allez dans "Settings" → "Domains"
2. Cliquez sur "Add"
3. Entrez votre domaine (ex: `carineland.fr`)
4. Suivez les instructions pour configurer les DNS

### Configuration DNS

Ajoutez les enregistrements suivants chez votre registrar:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 🔍 Vérifications Post-Déploiement

### Checklist

- [ ] Site accessible via l'URL Vercel
- [ ] Toutes les pages fonctionnent (/, /about, /gallery)
- [ ] Navigation fonctionne correctement
- [ ] Design responsive sur mobile
- [ ] Polices chargées correctement (Montserrat, Lora)
- [ ] Couleurs de la charte respectées
- [ ] GitHub Actions CI/CD actif

### Tests de performance

Utilisez les outils suivants pour vérifier les performances:

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

## 📊 Monitoring et Analytics

### Vercel Analytics (inclus)

- Allez dans "Analytics" dans le dashboard
- Visualisez les métriques de performance
- Suivez les Core Web Vitals

### Ajouter Google Analytics (optionnel)

1. Obtenez votre ID GA4
2. Ajoutez la variable d'environnement:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Intégrez le script dans `app/layout.tsx`

## 🔄 Rollback

Si un déploiement pose problème:

1. Allez dans "Deployments" dans le dashboard
2. Trouvez le déploiement précédent qui fonctionnait
3. Cliquez sur "..." → "Promote to Production"

## 🐛 Dépannage

### Build échoue

```bash
# Testez localement
npm run build

# Vérifiez les logs dans le dashboard Vercel
```

### Pages 404

- Vérifiez la structure des dossiers dans `app/`
- Assurez-vous que les fichiers `page.tsx` existent

### Problèmes de CSS

- Vérifiez que tous les fichiers `.module.css` sont importés
- Assurez-vous que `globals.css` est importé dans `layout.tsx`

## 🔗 Ressources

- [Documentation Vercel](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Vercel CLI](https://vercel.com/docs/cli)

## 📧 Support

En cas de problème:

- Documentation Vercel: https://vercel.com/docs
- Support Vercel: https://vercel.com/support
- GitHub Issues du projet

---

_Guide maintenu pour le projet Carineland_
