# Carineland

Site vitrine pour "Le Monde de Carine" - Créations artisanales à base de lierre et autres éléments de la nature.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ujju16/carineland)

## 🌐 Démo en Ligne

- **Production**: [À venir sur Vercel]
- **GitHub**: [https://github.com/ujju16/carineland](https://github.com/ujju16/carineland)

## ✨ Fonctionnalités

- ✅ Design minimaliste et épuré
- ✅ Mobile-first responsive
- ✅ Typographie soignée (Montserrat + Lora)
- ✅ Charte graphique naturelle
- ✅ Pages: Accueil, À Propos, Galerie
- ✅ Navigation sticky
- ✅ Tests automatisés
- ✅ CI/CD avec GitHub Actions
- ✅ Optimisé pour Vercel

## 🚀 Déploiement Rapide

### Déployer sur Vercel en un clic

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ujju16/carineland)

### Ou via la CLI

```bash
npm install -g vercel
vercel
```

Voir [DEPLOYMENT.md](./DEPLOYMENT.md) pour plus de détails.

## 🛠️ Stack Technique

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Langage**: [TypeScript](https://www.typescriptlang.org/)
- **UI**: [Material-UI (MUI)](https://mui.com/)
- **Tests**: [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions)
- **Déploiement**: [Vercel](https://vercel.com)

## 🎨 Charte Graphique

### Couleurs
- **Vert Lierre Foncé** (`#2F4F4F`) - Textes
- **Beige Nature** (`#F5F5DC`) - Fond
- **Brun Écorce** (`#8B4513`) - Accents
- **Blanc Pur** (`#FFFFFF`) - Surfaces

### Typographie
- **Titres**: Montserrat
- **Corps**: Lora

## 🚀 Démarrage Local

```bash
# Cloner le projet
git clone https://github.com/ujju16/carineland.git
cd carineland

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## 📜 Scripts

```bash
npm run dev      # Développement
npm run build    # Build production
npm start        # Serveur production
npm run lint     # Linting
npm test         # Tests
```

## 📁 Structure

```
carineland/
├── app/                    # Pages et composants (App Router)
│   ├── about/             # Page À Propos
│   ├── gallery/           # Page Galerie
│   ├── components/        # Composants réutilisables
│   ├── theme/             # Design tokens
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── __tests__/             # Tests
├── public/                # Assets statiques
├── .github/workflows/     # CI/CD
├── DOCUMENTATION.md       # Documentation complète
└── DEPLOYMENT.md          # Guide de déploiement
```

## 🧪 Tests et Qualité

- **Linting**: ESLint configuré
- **Tests**: Jest + React Testing Library
- **CI/CD**: Automated via GitHub Actions
- **Build**: Validé avant chaque merge

## 📖 Documentation

- [DOCUMENTATION.md](./DOCUMENTATION.md) - Documentation technique complète
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Guide de déploiement Vercel

## 🔧 Configuration Vercel

Le projet est pré-configuré pour Vercel:
- `vercel.json` - Configuration du build
- `.vercelignore` - Fichiers à ignorer
- `.env.example` - Exemple de variables d'environnement

## 📊 Performance

- ✅ Optimisation des images Next.js
- ✅ Code splitting automatique
- ✅ Compression gzip/brotli
- ✅ Cache optimisé
- ✅ Polices optimisées (Google Fonts)

## 🌍 Variables d'Environnement

Copier `.env.example` vers `.env.local`:

```bash
cp .env.example .env.local
```

Variables disponibles:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📝 Licence

Ce projet est sous licence MIT. Voir [LICENSE](./LICENSE).

## 👤 Auteur

**Carine** - Créatrice artisanale

## 🤝 Contribution

Les contributions sont les bienvenues! N'hésitez pas à ouvrir une issue ou une pull request.

## 📞 Support

Pour toute question ou suggestion:
- Ouvrir une [issue GitHub](https://github.com/ujju16/carineland/issues)
- Consulter la [documentation](./DOCUMENTATION.md)

---

*Fait avec ❤️ par Carine pour partager ses créations naturelles*
