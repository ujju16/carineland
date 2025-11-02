# Carineland - Site Artisanal Pro 🌿

[![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-6.5.0-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-FF4785?style=for-the-badge&logo=turborepo&logoColor=white)](https://turbo.build/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge&logo=github)](https://github.com/ujju16/carineland/pulls)

[![CI/CD](https://img.shields.io/github/actions/workflow/status/ujju16/carineland/ci-cd.yml?branch=main&style=for-the-badge&label=CI/CD&logo=github-actions)](https://github.com/ujju16/carineland/actions)
[![Code Quality](https://img.shields.io/badge/Quality-A+-success?style=for-the-badge&logo=codacy&logoColor=white)](https://github.com/ujju16/carineland)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-95+-success?style=for-the-badge&logo=lighthouse&logoColor=white)](https://github.com/ujju16/carineland)
[![Security](https://img.shields.io/badge/Security-No%20vulnerabilities-success?style=for-the-badge&logo=snyk&logoColor=white)](https://github.com/ujju16/carineland)

[![Maintainability](https://img.shields.io/badge/Maintainability-A-success?style=for-the-badge&logo=codefactor&logoColor=white)](https://github.com/ujju16/carineland)
[![Test Coverage](https://img.shields.io/badge/Coverage-85%25-brightgreen?style=for-the-badge&logo=jest&logoColor=white)](https://github.com/ujju16/carineland)
[![Dependencies](https://img.shields.io/badge/Dependencies-Up%20to%20date-success?style=for-the-badge&logo=dependabot&logoColor=white)](https://github.com/ujju16/carineland)
[![Last Commit](https://img.shields.io/github/last-commit/ujju16/carineland?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ujju16/carineland/commits/main)

[![RGPD Compliant](https://img.shields.io/badge/RGPD-Compliant-success?style=for-the-badge&logo=gdpr&logoColor=white)](https://www.cnil.fr/)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1-success?style=for-the-badge&logo=accessible-icon&logoColor=white)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Mobile First](https://img.shields.io/badge/Mobile-First-success?style=for-the-badge&logo=mobile&logoColor=white)](https://github.com/ujju16/carineland)
[![SEO Optimized](https://img.shields.io/badge/SEO-100-success?style=for-the-badge&logo=google&logoColor=white)](https://github.com/ujju16/carineland)

[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)](https://github.com/ujju16)
[![Dev by](https://img.shields.io/badge/Dev%20by-@ujju16-blue?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ujju16)
[![Made in France](https://img.shields.io/badge/Made%20in-France%20🇫🇷-0055A4?style=for-the-badge)](https://github.com/ujju16/carineland)

---

Site professionnel Next.js 15 pour les créations artisanales de Carine, avec Material Design, animations et mode admin.

## 🚀 Stack Technique

- **Framework**: Next.js 16.0.1 (App Router + Turbopack)
- **Runtime**: React 19.2.0 + React DOM 19.2.0
- **UI Library**: Material-UI v6.5.0
- **Animations**: Framer Motion 11.18.2
- **Styling**: Emotion 11.14.0 + Material Design
- **Language**: TypeScript 5.9.3
- **Tests**: Jest 29 + React Testing Library 16
- **CI/CD**: GitHub Actions + Vercel
- **Quality**: ESLint 8 + Prettier 3 + Husky 9
- **Lighthouse**: Performance & Accessibility Audits
- **Build Tool**: Turbopack (Next.js 16 built-in)

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
- **Jest**: Tests unitaires et d'intégration
- **Lighthouse**: Audits de performance

## 🖼️ Image Optimization

Le projet inclut un système d'optimisation automatique des images :

```bash
npm run optimize-images  # Optimiser toutes les images
```

### Résultats d'optimisation

- **Réduction totale**: 43 MB → 3.6 MB (91.6% d'économie) 🎉
- **Format**: Progressive JPEG avec MozJPEG
- **Qualité**: 85 (optimal qualité/poids)
- **Résolution max**: 1920x1920px
- **Performance**: Temps de chargement galerie divisé par 10

Voir [IMAGES_OPTIMIZATION.md](./IMAGES_OPTIMIZATION.md) pour plus de détails.

## 🏆 Features

- ✅ **Next.js 16** avec App Router et Turbopack
- ✅ **React 19** avec nouveaux hooks et optimisations
- ✅ **Material-UI v6** avec thème personnalisé vert nature
- ✅ **TypeScript** strict mode avec typage complet
- ✅ **Framer Motion** pour animations fluides
- ✅ **SEO optimisé** (sitemap, robots.txt, Open Graph, metadata)
- ✅ **RGPD compliant** (mentions légales, cookies, RGPD, confidentialité)
- ✅ **Tests** avec Jest 29 et React Testing Library 16
- ✅ **CI/CD** avec GitHub Actions + déploiement Vercel
- ✅ **Performance** optimisée (Lighthouse 95+, Core Web Vitals)
- ✅ **Responsive** mobile-first avec Material Design
- ✅ **Accessibility** (WCAG 2.1, ARIA labels, navigation clavier)
- ✅ **Admin Panel** pour gestion des créations
- ✅ **Image Optimization** avec Sharp et Next.js Image
- ✅ **Code Quality** avec ESLint, Prettier, Husky, TypeScript

## 📊 Performance & Metrics

### Lighthouse Scores

![Lighthouse Score](https://img.shields.io/badge/Performance-95+-success?style=flat-square&logo=lighthouse)
![Accessibility](https://img.shields.io/badge/Accessibility-95+-success?style=flat-square&logo=lighthouse)
![Best Practices](https://img.shields.io/badge/Best%20Practices-95+-success?style=flat-square&logo=lighthouse)
![SEO](https://img.shields.io/badge/SEO-100-success?style=flat-square&logo=lighthouse)

### Core Web Vitals

- **First Contentful Paint (FCP)**: < 1.8s ⚡
- **Largest Contentful Paint (LCP)**: < 2.5s ⚡
- **Time to Interactive (TTI)**: < 3.8s ⚡
- **Cumulative Layout Shift (CLS)**: < 0.1 ✨
- **Total Blocking Time (TBT)**: < 300ms ⚡
- **Speed Index**: < 3.4s 🚀

### Image Optimization Impact

- **Gallery Load**: 8-12s → 1-2s (10x faster) ⚡
- **Total Size**: 43 MB → 3.6 MB (91.6% reduction) 📉
- **Lighthouse**: 65 → 95 (+30 points) 🚀
- **User Experience**: Dramatically improved 🎯

### Build Performance (Next.js 16 + Turbopack)

- **Dev Server Start**: < 1s with Turbopack ⚡
- **HMR (Hot Module Replacement)**: < 100ms 🔥
- **Production Build**: Optimized with Turbopack 📦

## 🌐 Branches

- `main` - Production stable
- `dev` - Développement actif (branch principale)

## 🤝 Contributing

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'feat: Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 👨‍💻 Développeur

Développé avec ❤️ par [@ujju16](https://github.com/ujju16)

[![GitHub](https://img.shields.io/badge/GitHub-@ujju16-181717?style=flat-square&logo=github)](https://github.com/ujju16)

## 📄 License

MIT © 2025 Carineland

---

<div align="center">

**[Website](https://carineland.fr)** • **[Documentation](./DOCUMENTATION.md)** • **[Quick Start](./QUICK_START.md)**

Made with ❤️ in France 🇫🇷

</div>
