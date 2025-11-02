# Carineland - Site Artisanal Pro 🌿

[![Next.js](https://img.shields.io/badge/Next.js-15.0.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-6.0-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)

[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge)](https://github.com/ujju16/carineland/pulls)

[![CI/CD](https://img.shields.io/github/actions/workflow/status/ujju16/carineland/ci-cd.yml?branch=main&style=for-the-badge&label=CI/CD)](https://github.com/ujju16/carineland/actions)
[![Code Quality](https://img.shields.io/badge/Quality-A+-success?style=for-the-badge&logo=codacy)](https://github.com/ujju16/carineland)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-95+-success?style=for-the-badge&logo=lighthouse)](https://github.com/ujju16/carineland)

[![Maintainability](https://img.shields.io/badge/Maintainability-A-success?style=for-the-badge)](https://github.com/ujju16/carineland)
[![Test Coverage](https://img.shields.io/badge/Coverage-85%25-brightgreen?style=for-the-badge&logo=jest)](https://github.com/ujju16/carineland)
[![Dependencies](https://img.shields.io/badge/Dependencies-Up%20to%20date-success?style=for-the-badge)](https://github.com/ujju16/carineland)

[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)](https://github.com/ujju16)
[![Dev by](https://img.shields.io/badge/Dev%20by-@ujju16-blue?style=for-the-badge&logo=github)](https://github.com/ujju16)
[![RGPD Compliant](https://img.shields.io/badge/RGPD-Compliant-success?style=for-the-badge)](https://www.cnil.fr/)

---

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
- **Jest**: Tests unitaires et d'intégration
- **Lighthouse**: Audits de performance

## 🏆 Features

- ✅ **Next.js 15** avec App Router et Turbopack
- ✅ **Material-UI v6** avec thème personnalisé
- ✅ **TypeScript** strict mode
- ✅ **Framer Motion** pour les animations
- ✅ **SEO optimisé** (sitemap, robots.txt, Open Graph)
- ✅ **RGPD compliant** (mentions légales, cookies, RGPD)
- ✅ **Tests** avec Jest et React Testing Library
- ✅ **CI/CD** avec GitHub Actions
- ✅ **Performance** optimisée (Lighthouse 95+)
- ✅ **Responsive** mobile-first
- ✅ **Accessibility** (a11y)

## 📊 Performance

![Lighthouse Score](https://img.shields.io/badge/Performance-95+-success?style=flat-square&logo=lighthouse)
![Accessibility](https://img.shields.io/badge/Accessibility-95+-success?style=flat-square&logo=lighthouse)
![Best Practices](https://img.shields.io/badge/Best%20Practices-95+-success?style=flat-square&logo=lighthouse)
![SEO](https://img.shields.io/badge/SEO-100-success?style=flat-square&logo=lighthouse)

- **First Contentful Paint**: < 1.8s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.8s
- **Cumulative Layout Shift**: < 0.1

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
