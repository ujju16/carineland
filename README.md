# 🌸 Carineland - Créations Artisanales

[![CI/CD](https://github.com/ujju16/carineland/actions/workflows/ci.yml/badge.svg)](https://github.com/ujju16/carineland/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/ujju16/carineland/branch/main/graph/badge.svg?token=HYL2CAnaE6)](https://codecov.io/gh/ujju16/carineland)
[![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-1.2-pink?style=for-the-badge&logo=bun)](https://bun.sh/)

Site web professionnel présentant les créations artisanales uniques de Carineland - Couronnes, compositions florales et sculptures en bois flotté.

## ✨ Caractéristiques

- 🎨 **Design Material Design** - Interface moderne et élégante
- 📱 **Mobile First** - Responsive sur tous les appareils
- ⚡ **Performance optimale** - Next.js 16 avec Turbopack
- ♿ **Accessibilité WCAG 2.1 AA** - Conforme aux standards ARIA
- 🔐 **Administration sécurisée** - Gestion des créations avec NextAuth
- 🚀 **CI/CD automatisé** - Tests, qualité de code et déploiement
- 📊 **Monitoring Grafana** - Métriques et tableaux de bord
- 🌐 **SEO optimisé** - Meta tags, Open Graph, sitemap

## 🚀 Démarrage rapide

```bash
# Installation des dépendances
bun install

# Développement
bun run dev

# Build de production
bun run build

# Lancer les tests
bun run test

# Code quality
bun run quality
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du projet

```
carineland/
├── app/                      # Application Next.js 16 (App Router)
│   ├── admin/               # Interface d'administration
│   ├── api/                 # API Routes
│   ├── components/          # Composants React
│   ├── gallery/             # Galerie des créations
│   ├── legal/               # Mentions légales
│   └── types/               # Types TypeScript
├── docs/                    # Documentation complète
├── public/                  # Fichiers statiques
│   └── creations/           # Images des créations
├── __tests__/               # Tests Jest
└── .github/workflows/       # GitHub Actions CI/CD
```

## 📚 Documentation

Documentation complète disponible dans le dossier [`docs/`](./docs/):

### 🎯 Documentation principale
- [**Architecture du projet**](./docs/ARCHITECTURE.md) - Structure et organisation
- [**Guide de démarrage**](./docs/QUICK_START.md) - Installation et premiers pas
- [**Déploiement**](./docs/DEPLOYMENT.md) - Guide de mise en production

### 👨‍💻 Documentation technique
- [**Schéma de données Admin**](./docs/ADMIN_DATA_SCHEMA.md) - Structure des données et API
- [**Documentation Strapi**](./docs/STRAPI_ADMIN_DOCUMENTATION.md) - CMS headless et admin
- [**Code Quality**](./docs/CODE_QUALITY.md) - Standards et bonnes pratiques
- [**Tests**](./docs/CODE_QUALITY_REPORT.md) - Stratégie de tests

### ♿ Accessibilité
- [**Accessibilité**](./docs/ACCESSIBILITY.md) - Standards WCAG et ARIA
- [**Améliorations accessibilité**](./docs/ACCESSIBILITY_IMPROVEMENTS.md) - Détails des implémentations

### 📊 Qualité et monitoring
- [**Grafana Monitoring**](./docs/GRAFANA_MONITORING.md) - Métriques et tableaux de bord
- [**Codecov**](./docs/CODECOV_SETUP.md) - Coverage des tests
- [**Badges**](./docs/BADGES.md) - Badges du projet

### 🔧 Migration et configuration
- [**Migration Bun**](./docs/BUN_MIGRATION.md) - Migration vers Bun
- [**CI/CD & Codecov**](./docs/CI_CD_CODECOV_DEPLOYMENT.md) - Pipeline complet

## 🛠️ Technologies

### Core
- **Next.js 16.0.1** - Framework React avec App Router
- **React 19** - Bibliothèque UI
- **TypeScript 5.6** - Typage statique
- **Bun 1.2** - Runtime et package manager

### UI/UX
- **Material-UI v6** - Composants Material Design
- **Emotion** - CSS-in-JS
- **Next/Image** - Optimisation d'images

### Backend & Auth
- **NextAuth.js v5** - Authentification
- **Strapi** (préparé) - CMS headless

### Tests & Quality
- **Jest** - Tests unitaires
- **React Testing Library** - Tests de composants
- **ESLint** - Linting
- **Prettier** - Formatage
- **Husky** - Git hooks
- **Codecov** - Coverage

### DevOps
- **GitHub Actions** - CI/CD
- **Vercel** - Hébergement et déploiement
- **Grafana** - Monitoring

## 🎨 Pages du site

- **/** - Page d'accueil avec créations en vedette
- **/gallery** - Galerie complète des créations
- **/about** - À propos de l'artiste
- **/admin** - Interface d'administration (protégée)
- **/legal/mentions-legales** - Mentions légales
- **/legal/confidentialite** - Politique de confidentialité
- **/legal/cookies** - Politique des cookies
- **/legal/rgpd** - Informations RGPD

## 🔐 Administration

### Accès
URL: `/admin`

Créez un fichier `.env.local` avec vos credentials:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=votre-secret-super-securise
ADMIN_USERNAME=votre-username
ADMIN_PASSWORD=votre-password

# Vercel
VERCEL_TOKEN=votre-token
VERCEL_PROJECT_ID=prj_wKd2fNyPoR18nWrnRorkfCmiq3YY
VERCEL_ORG_ID=team_dqiw0xP7HyEj3CXA3L5gTXSh

# Codecov
CODECOV_TOKEN=8ac3ca98-8be0-4485-8b00-3ff10e700e4b
```

### Fonctionnalités admin
- ✅ Gestion des créations (CRUD)
- ✅ Upload et gestion d'images
- ✅ Catégorisation et tags
- ✅ Mise en avant des créations
- ✅ Interface Material Design
- ✅ Accessibilité complète (ARIA)

## 📊 Qualité du code

Le projet maintient des standards élevés de qualité:

- ✅ **TypeScript strict mode**
- ✅ **ESLint** avec règles Next.js
- ✅ **Prettier** pour formatage consistant
- ✅ **Tests automatisés** avec Jest
- ✅ **Coverage >80%** sur Codecov
- ✅ **Lighthouse** score >90
- ✅ **Accessibilité WCAG 2.1 AA**

### Commandes quality

```bash
# Linting
bun run lint
bun run lint:fix

# Formatage
bun run format
bun run format:check

# Tests
bun run test
bun run test:coverage

# Type checking
bun run type-check

# All-in-one quality check
bun run quality
```

## 🚀 Déploiement

### Production
Le site est automatiquement déployé sur Vercel via GitHub Actions.

URL production: **https://carineland.fr**

### Environnements
- **Production** - Branche `main`
- **Preview** - Pull requests
- **Development** - Branche `dev`

### CI/CD Pipeline
1. ✅ Linting (ESLint)
2. ✅ Type checking (TypeScript)
3. ✅ Tests (Jest)
4. ✅ Code coverage (Codecov)
5. ✅ Build Next.js
6. ✅ Déploiement Vercel

## 🤝 Contribution

### Git workflow

```bash
# Créer une branche feature
git checkout -b feature/ma-feature

# Commits
git add .
git commit -m "feat: description"

# Push
git push origin feature/ma-feature

# Créer une PR via GitHub
```

### Convention de commits

- `feat:` - Nouvelle fonctionnalité
- `fix:` - Correction de bug
- `docs:` - Documentation
- `style:` - Formatage, style
- `refactor:` - Refactoring
- `test:` - Ajout de tests
- `chore:` - Maintenance

## 📈 Métriques

[![Coverage Graph](https://codecov.io/gh/ujju16/carineland/graphs/sunburst.svg?token=HYL2CAnaE6)](https://codecov.io/gh/ujju16/carineland)

- **Code Coverage**: ~80%
- **Lighthouse Performance**: 95+
- **Lighthouse Accessibility**: 100
- **TypeScript Coverage**: 100%

## 🐛 Bugs et features

Pour reporter un bug ou demander une fonctionnalité:
1. Vérifiez les [issues existantes](https://github.com/ujju16/carineland/issues)
2. Créez une nouvelle issue avec le template approprié

## 📄 Licence

© 2024 Carineland - Tous droits réservés

Site développé avec ❤️ par [@ujju16](https://github.com/ujju16)

## 🔗 Liens utiles

- 🌐 **Site web**: [carineland.fr](https://carineland.fr)
- 📦 **Repository**: [github.com/ujju16/carineland](https://github.com/ujju16/carineland)
- 📊 **Coverage**: [codecov.io/gh/ujju16/carineland](https://codecov.io/gh/ujju16/carineland)
- 🚀 **Vercel**: [vercel.com](https://vercel.com)

---

**Note**: Ce projet utilise Next.js 16 avec Turbopack pour des performances optimales et Bun comme runtime/package manager.
