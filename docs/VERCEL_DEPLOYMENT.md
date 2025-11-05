# Configuration Déploiement Vercel

## Mise à jour Node.js 22

Le site a été mis à jour pour utiliser Node.js 22. Voici les actions à effectuer dans Vercel :

### 1. Paramètres du Projet Vercel

Accédez à : **Project Settings > General**

- **Node.js Version**: `22.x`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install --legacy-peer-deps`

### 2. Variables d'Environnement

Vérifiez que ces variables sont définies dans **Project Settings > Environment Variables** :

- `NEXT_PUBLIC_SITE_URL` = `https://carineland.fr`
- `NODE_ENV` = `production` (généralement défini automatiquement)

### 3. Configuration Domaine

- **Domaine principal** : `carineland.fr`
- **Redirections** : `www.carineland.fr` → `carineland.fr`

### 4. Favicons Améliorés

Les favicons ont été régénérés avec une meilleure visibilité :

- `favicon.ico` - Multi-tailles (16, 32, 48, 64, 128, 256px)
- `favicon-16x16.png` - Haute résolution
- `favicon-32x32.png` - Haute résolution
- `favicon-48x48.png` - Nouvelle taille pour meilleure visibilité
- `apple-touch-icon.png` - 180x180px pour iOS

### 5. Build Automatique

Le déploiement se fait automatiquement via GitHub Actions :

- **Branch main** → Production
- **Branch dev** → Preview

### 6. Vérification Build Local

Pour vérifier le build avant déploiement :

```bash
npm run build
npm start
```

### 7. Dépannage

Si le build échoue sur Vercel :

1. Vérifier que Node.js est bien en version 22.x
2. Vérifier que `--legacy-peer-deps` est utilisé pour l'installation
3. Consulter les logs de build dans Vercel Dashboard
4. Le build local fonctionne ✓ (testé avec succès)

---

**Développé par** : @ujju16
**Dernière mise à jour** : 2025-11-03
