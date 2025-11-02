# Carineland - Site Artisanal Pro 🌿

Site professionnel Next.js 15 pour les créations artisanales de Carine, avec Material Design, animations et mode admin.

## 🚀 Stack Technique

- **Framework**: Next.js 15 (App Router)
- **UI**: Material-UI v6 + Framer Motion
- **Styling**: Emotion + Material Design
- **Language**: TypeScript
- **Tests**: Jest + React Testing Library
- **CI/CD**: GitHub Actions + Vercel
- **Quality**: ESLint + Prettier + Husky

## 📦 Installation

```bash
npm install --legacy-peer-deps
```

## 🛠️ Commandes

```bash
# Développement
npm run dev

# Build production
npm run build

# Tests
npm test
npm run test:watch
npm run test:coverage

# Quality
npm run lint
npm run lint:fix
npm run format
npm run format:check
npm run type-check
```

## 🎨 Features

### ✨ Design
- Mobile-first responsive
- Material Design 3
- Animations Framer Motion
- Thème vert nature personnalisé
- Typographie Montserrat + Lora

### 🔧 Fonctionnalités
- Page d'accueil moderne
- Galerie avec filtres
- Page À propos
- **Mode Admin** pour gérer les créations
- Navigation responsive avec drawer mobile
- SEO optimisé

### 🔐 Admin Panel
Accès: `/admin`
- Ajouter/Modifier/Supprimer des créations
- Upload d'images
- Catégorisation
- Mise en avant

## 🚢 Déploiement

### Vercel (Recommandé)
Le site se déploie automatiquement via GitHub Actions :
- **dev branch** → Preview deployment
- **main branch** → Production

### Variables d'environnement requises
```env
VERCEL_TOKEN=xxx
VERCEL_ORG_ID=xxx
VERCEL_PROJECT_ID=xxx
```

## 📂 Structure

```
app/
├── admin/          # Panel d'administration
├── components/     # Composants réutilisables
├── lib/           # Utilitaires (MUI Registry)
├── theme/         # Thème Material-UI
├── types/         # Types TypeScript
├── about/         # Page à propos
├── gallery/       # Page galerie
└── page.tsx       # Page d'accueil
```

## 🧪 Tests

```bash
npm test              # Run tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

## 📝 Code Quality

- **ESLint**: Configuration stricte Next.js + TypeScript
- **Prettier**: Formatage automatique
- **Husky**: Pre-commit hooks
- **TypeScript**: Mode strict

## 🌐 Branches

- `main` - Production
- `dev` - Développement (branch principale)

## 👨‍💻 Développeur

Développé avec ❤️ par [@ujju16](https://github.com/ujju16)

## 📄 License

MIT © 2025 Carineland
