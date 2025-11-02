# 🚀 Guide de Démarrage Rapide - Carineland

## ⚡ Démarrage Ultra Rapide

### 1️⃣ Lancer le site en développement
```bash
npm run dev
```
Ouvrir http://localhost:3000 (ou le port indiqué)

### 2️⃣ Accéder aux différentes pages
- 🏠 **Homepage**: http://localhost:3000
- 🖼️ **Galerie**: http://localhost:3000/gallery  
- ℹ️ **À propos**: http://localhost:3000/about
- 👑 **Admin**: http://localhost:3000/admin

---

## 🎨 Le Design

### Couleurs du Thème
- **Primaire**: Vert nature #2d5016
- **Secondaire**: Marron terre #8b4513  
- **Fond**: Beige doux #faf8f5
- **Texte**: Vert sombre #2c3e20

### Typographie
- **Titres**: Lora (serif élégant)
- **Corps**: Montserrat (sans-serif moderne)

---

## 🔧 Personnalisation

### Modifier le thème
Éditer `app/theme/theme.ts`

### Ajouter une page
1. Créer `app/nouvelle-page/page.tsx`
2. Ajouter dans la navigation `app/components/Navigation.tsx`

### Modifier le contenu
- Homepage: `app/page.tsx`
- Galerie: `app/gallery/page.tsx`
- À propos: `app/about/page.tsx`
- Admin: `app/admin/page.tsx`

---

## 📦 Commandes Utiles

```bash
# Développement
npm run dev              # Serveur de dev avec hot reload

# Build & Production  
npm run build            # Build optimisé
npm start                # Serveur production

# Code Quality
npm run lint             # Vérifier ESLint
npm run lint:fix         # Corriger automatiquement
npm run format           # Formatter avec Prettier
npm run type-check       # Vérifier TypeScript

# Tests
npm test                 # Lancer les tests
npm run test:watch       # Mode watch
npm run test:coverage    # Avec coverage
```

---

## 🚢 Déployer sur Vercel

### Option 1: Via GitHub (Recommandé)
1. Push sur la branche `dev`:
   ```bash
   git add .
   git commit -m "feat: mon changement"
   git push origin dev
   ```
2. GitHub Actions build et déploie automatiquement
3. Une fois validé, merger vers `main` pour la production

### Option 2: Depuis l'interface Vercel
1. Connecter le repo GitHub
2. Importer le projet
3. Vercel détecte Next.js automatiquement
4. Deploy ! 🚀

### Variables d'environnement Vercel
Ajouter dans les settings GitHub (ou Vercel):
```
VERCEL_TOKEN=xxx
VERCEL_ORG_ID=xxx  
VERCEL_PROJECT_ID=xxx
```

---

## 📱 Tester le Responsive

### Desktop
- Navigateur normal

### Mobile
1. Ouvrir DevTools (F12)
2. Cliquer sur l'icône mobile (Ctrl+Shift+M)
3. Tester différentes tailles

### Ou sur un vrai téléphone
1. Trouver l'IP locale: `ipconfig` (Windows) ou `ifconfig` (Mac/Linux)
2. Accéder depuis le téléphone: `http://[IP]:3000`

---

## 🎯 Next Steps

### Essentiels
- [ ] Ajouter de vraies images dans `/public/images`
- [ ] Configurer les secrets Vercel pour le déploiement
- [ ] Remplir le contenu réel

### Améliorations
- [ ] Ajouter une base de données (Prisma)
- [ ] Système d'authentification admin
- [ ] Upload d'images vers Cloudinary
- [ ] Formulaire de contact
- [ ] Newsletter

### Avancé
- [ ] Blog avec MDX
- [ ] E-commerce (paiements)
- [ ] Multi-langue (i18n)
- [ ] PWA (Progressive Web App)

---

## 🆘 Problèmes Courants

### Le build échoue
```bash
rm -rf .next node_modules
npm install --legacy-peer-deps
npm run build
```

### Port déjà utilisé
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [PID] /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Types TypeScript incorrects
```bash
npm run type-check
```

---

## 📚 Ressources

- [Next.js Docs](https://nextjs.org/docs)
- [Material-UI](https://mui.com/material-ui/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Deploy](https://vercel.com/docs)

---

## 💬 Support

- **Dev**: [@ujju16](https://github.com/ujju16)
- **Issues**: GitHub Issues
- **Docs**: `DEVELOPMENT_SUMMARY.md`

---

**Bon développement ! 🚀**
