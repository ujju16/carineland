# Documentation Carineland

## 📚 Table des Matières

1. [Architecture du Projet](#architecture-du-projet)
2. [Charte Graphique](#charte-graphique)
3. [Design Tokens](#design-tokens)
4. [Composants](#composants)
5. [Tests](#tests)
6. [CI/CD](#cicd)
7. [Développement](#développement)

## Architecture du Projet

```
carineland/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── globals.css        # Styles globaux
│   └── theme/             # Design system
│       └── tokens.ts      # Design tokens
├── __tests__/             # Tests unitaires
├── public/                # Assets statiques
├── .github/
│   └── workflows/         # GitHub Actions CI/CD
└── docs/                  # Documentation additionnelle
```

## Charte Graphique

### Couleurs

#### Palette Principale

- **Vert Lierre Foncé** (`#2F4F4F`): Couleur principale pour textes et éléments importants
- **Beige Nature** (`#F5F5DC`): Fond principal pour une sensation douce et organique
- **Brun Écorce** (`#8B4513`): Accents, bordures et éléments de navigation
- **Blanc Pur** (`#FFFFFF`): Espaces négatifs et fonds de cartes

#### Usage Sémantique

- **Background**: Beige Nature
- **Surface**: Blanc Pur
- **Text**: Vert Lierre Foncé
- **Accent**: Brun Écorce
- **Border**: Brun Écorce

### Typographie

#### Polices

- **Titres**: `Montserrat` - Police moderne et élégante pour la clarté
- **Corps de texte**: `Lora` - Police avec empattements pour la lisibilité

#### Hiérarchie

- **H1**: 3rem (48px) - Titre principal
- **H2**: 2rem (32px) - Sections
- **H3**: 1.5rem (24px) - Sous-sections
- **Body**: 1.1rem (17.6px) - Texte courant
- **Small**: 0.875rem (14px) - Annotations

## Design Tokens

Les tokens de design sont centralisés dans `app/theme/tokens.ts` et incluent:

### Colors

```typescript
colors.primary.darkGreen
colors.primary.beige
colors.primary.brown
colors.primary.white
```

### Typography

```typescript
typography.fontFamily.heading
typography.fontFamily.body
typography.fontSize.*
typography.fontWeight.*
```

### Spacing

```typescript
spacing.xs // 0.25rem (4px)
spacing.sm // 0.5rem (8px)
spacing.md // 1rem (16px)
spacing.lg // 1.5rem (24px)
spacing.xl // 2rem (32px)
```

### Breakpoints

```typescript
breakpoints.mobile // 640px
breakpoints.tablet // 768px
breakpoints.desktop // 1024px
breakpoints.wide // 1280px
```

## Composants

### Structure Mobile-First

Tous les composants sont conçus avec une approche mobile-first:

1. **Styles de base**: Optimisés pour mobile
2. **Media queries**: Ajouts progressifs pour tablettes et desktop
3. **Responsive images**: Optimisation automatique via Next.js Image
4. **Touch-friendly**: Zones tactiles de minimum 44x44px

### Exemple de Composant Card

```tsx
<div className={styles.card}>
  <h3>Titre</h3>
  <p>Description</p>
</div>
```

Styles correspondants:

```css
.card {
  background: var(--color-beige);
  padding: 2rem;
  border-radius: 8px;
  border: 2px solid var(--color-brown);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
```

## Tests

### Configuration Jest

Le projet utilise Jest avec React Testing Library pour les tests unitaires.

#### Lancer les tests

```bash
npm test                    # Mode watch
npm test -- --coverage      # Avec couverture
npm test -- --watchAll=false # Run once
```

#### Structure d'un test

```tsx
import { render, screen } from '@testing-library/react'
import Component from '@/app/component'

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })
})
```

### Bonnes Pratiques

- Tester le comportement utilisateur, pas l'implémentation
- Utiliser les queries accessibles (getByRole, getByLabelText)
- Viser une couverture de code > 80%
- Tester les cas limites et erreurs

## CI/CD

### GitHub Actions

Le pipeline CI/CD s'exécute automatiquement sur:

- Push vers `main`, `develop`, `install-project`
- Pull requests vers `main`

#### Jobs

1. **Lint**
   - Vérifie la qualité du code avec ESLint
   - Assure la cohérence du style

2. **Test**
   - Exécute la suite de tests Jest
   - Génère un rapport de couverture
   - Upload vers Codecov

3. **Build**
   - Compile l'application pour la production
   - Vérifie l'absence d'erreurs de build
   - Archive les artifacts

### Configuration Manuelle

Pour tester localement le pipeline:

```bash
npm run lint     # Linting
npm test         # Tests
npm run build    # Build production
```

## Développement

### Démarrage Rapide

```bash
# Cloner le projet
git clone https://github.com/ujju16/carineland.git
cd carineland

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

### Scripts Disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm start` - Serveur de production
- `npm run lint` - Vérification ESLint
- `npm test` - Tests avec Jest

### Variables d'Environnement

Créer un fichier `.env.local` pour les variables locales:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Convention de Commits

Utiliser les préfixes Conventional Commits:

- `feat:` - Nouvelle fonctionnalité
- `fix:` - Correction de bug
- `docs:` - Documentation
- `style:` - Formatage, pas de changement de code
- `refactor:` - Refactoring
- `test:` - Ajout ou modification de tests
- `chore:` - Maintenance

### Workflow Git

1. Créer une branche depuis `main`

   ```bash
   git checkout -b feature/ma-fonctionnalite
   ```

2. Développer et committer

   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

3. Pousser et créer une PR

   ```bash
   git push -u origin feature/ma-fonctionnalite
   ```

4. Après review, merger dans `main`

### Ressources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Testing Library](https://testing-library.com/react)
- [Material-UI](https://mui.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

_Documentation maintenue pour le projet Carineland_
