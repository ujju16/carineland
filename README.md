# Carineland - Site Artisanal Pro 🌿

<div align="center">

<img src="./public/logo1.png" alt="Carineland Logo" width="120" style="border-radius: 20px;">

### 🎨 _Créations Artisanales Uniques en Résine et Matériaux Naturels_

---

### 🚀 **Tech Stack**

![Next.js](https://img.shields.io/badge/Next.js-16.0.1-000000?style=flat&logo=next.js&logoColor=white&labelColor=000000)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react&logoColor=white&labelColor=20232a)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript&logoColor=white&labelColor=3178C6)
![Material-UI](https://img.shields.io/badge/MUI-6.5.0-007FFF?style=flat&logo=mui&logoColor=white&labelColor=007FFF)
![Bun](https://img.shields.io/badge/Bun-1.2+-fbf0df?style=flat&logo=bun&logoColor=000&labelColor=fbf0df)

### 🔄 **CI/CD & Deployment**

![CI/CD Pipeline](https://img.shields.io/github/actions/workflow/status/ujju16/carineland/ci.yml?branch=main&style=flat&label=CI%2FCD&logo=github-actions&logoColor=white&labelColor=2088FF)
![Vercel](https://img.shields.io/badge/Vercel-Production-000000?style=flat&logo=vercel&logoColor=white&labelColor=000000)
![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-FF4785?style=flat&logo=turborepo&logoColor=white&labelColor=FF4785)

### 📊 **Quality & Performance**

![Code Quality](https://img.shields.io/badge/Quality-A+-00C853?style=flat&logo=codacy&logoColor=white&labelColor=00C853)
![Lighthouse](https://img.shields.io/badge/Lighthouse-95+-00C853?style=flat&logo=lighthouse&logoColor=white&labelColor=00C853)
![Test Coverage](https://img.shields.io/badge/Coverage-85%25-00C853?style=flat&logo=jest&logoColor=white&labelColor=00C853)
![Security](https://img.shields.io/badge/Security-No_Issues-00C853?style=flat&logo=snyk&logoColor=white&labelColor=00C853)

### ♿ **Accessibility & Compliance**

![WCAG 2.1](https://img.shields.io/badge/WCAG-2.1_AA-4CAF50?style=flat&logo=accessible-icon&logoColor=white&labelColor=4CAF50)
![RGPD](https://img.shields.io/badge/RGPD-Compliant-4CAF50?style=flat&logo=gdpr&logoColor=white&labelColor=4CAF50)
![SEO](https://img.shields.io/badge/SEO-100-4CAF50?style=flat&logo=google&logoColor=white&labelColor=4CAF50)
![Mobile First](https://img.shields.io/badge/Mobile-First-4CAF50?style=flat&logo=mobile&logoColor=white&labelColor=4CAF50)

### 📈 **Monitoring & Metrics**

![Grafana](https://img.shields.io/badge/Grafana-Ready-F46800?style=flat&logo=grafana&logoColor=white&labelColor=F46800)
![Prometheus](https://img.shields.io/badge/Prometheus-Active-E6522C?style=flat&logo=prometheus&logoColor=white&labelColor=E6522C)
![Dependencies](https://img.shields.io/badge/Dependencies-Up_to_date-00C853?style=flat&logo=dependabot&logoColor=white&labelColor=00C853)

### 📝 **Project Info**

![License](https://img.shields.io/badge/License-MIT-FFC107?style=flat&logo=opensourceinitiative&logoColor=white&labelColor=FFC107)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-00C853?style=flat&logo=github&logoColor=white&labelColor=00C853)
![Last Commit](https://img.shields.io/github/last-commit/ujju16/carineland?style=flat&logo=github&logoColor=white&labelColor=181717)

---

![Made with Love](https://img.shields.io/badge/Made_with-❤️-FF4081?style=flat&labelColor=FF4081)
![Dev by @ujju16](https://img.shields.io/badge/Dev_by-@ujju16-181717?style=flat&logo=github&logoColor=white&labelColor=181717)
![Made in France](https://img.shields.io/badge/Made_in-France_🇫🇷-0055A4?style=flat&labelColor=0055A4)

</div>

---

Site professionnel Next.js 16 pour les créations artisanales de Carine, avec Material Design, animations et mode admin.

## 🚀 Stack Technique

- **Framework**: Next.js 16.0.1 (App Router + Turbopack)
- **Runtime**: Bun 1.2+ (Fast JavaScript runtime)
- **React**: React 19.2.0 + React DOM 19.2.0
- **UI Library**: Material-UI v6.5.0
- **Animations**: Framer Motion 11.18.2
- **Styling**: Emotion 11.14.0 + Material Design
- **Language**: TypeScript 5.9.3
- **Tests**: Jest 29 + React Testing Library 16
- **CI/CD**: GitHub Actions + Vercel
- **Quality**: ESLint 8 + Prettier 3 + Husky 9
- **Lighthouse**: Performance & Accessibility Audits
- **Build Tool**: Turbopack (Next.js 16 built-in)
- **Monitoring**: Grafana + Prometheus + Node Exporter

## 📦 Installation

**Prérequis**: [Bun](https://bun.sh/) 1.2+

```bash
bun install
```

## 🛠️ Commandes

```bash
# Développement
bun run dev

# Build production
bun run build

# Tests
bun test
bun run test:watch
bun run test:coverage

# Quality
bun run lint
bun run lint:fix
bun run format
bun run format:check
bun run type-check

# Monitoring
bun run monitoring:up    # Démarrer Grafana & Prometheus
bun run monitoring:down  # Arrêter le monitoring
bun run monitoring:logs  # Voir les logs
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

## 📊 Monitoring

Le projet inclut un système de monitoring complet avec Grafana et Prometheus :

```bash
npm run monitoring:up    # Démarrer les services
```

### Services disponibles

- **Grafana**: http://localhost:3001 (admin/carineland2025)
- **Prometheus**: http://localhost:9090
- **Node Exporter**: http://localhost:9100/metrics

### Métriques surveillées

- CPU Usage & Load Average
- Memory Usage & Swap
- Disk I/O & Space
- Network Traffic
- System Uptime

Voir [GRAFANA_MONITORING.md](./GRAFANA_MONITORING.md) pour plus de détails.

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
- ✅ **Monitoring** avec Grafana, Prometheus et Node Exporter

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

[![GitHub](https://img.shields.io/badge/GitHub-@ujju16-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/ujju16)

## 📄 License

MIT © 2025 Carineland

---

<div align="center">

**[Website](https://carineland.fr)** • **[Documentation](./DOCUMENTATION.md)** • **[Quick Start](./QUICK_START.md)**

Made with ❤️ in France 🇫🇷

</div>
