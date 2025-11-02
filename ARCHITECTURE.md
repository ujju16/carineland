# Architecture Next.js 16 - Carineland 🏗️

## 📁 Structure du Projet (Next.js 16 App Router)

```
carineland/
├── app/                          # Next.js 16 App Router (Répertoire principal)
│   ├── layout.tsx               # Root layout avec MUI et providers
│   ├── page.tsx                 # Page d'accueil (/)
│   ├── globals.css              # Styles globaux
│   ├── robots.ts                # Génération dynamique robots.txt
│   ├── sitemap.ts               # Génération dynamique sitemap.xml
│   │
│   ├── about/                   # Page À propos
│   │   ├── layout.tsx          # Layout spécifique
│   │   └── page.tsx            # Contenu page À propos
│   │
│   ├── gallery/                 # Page Galerie
│   │   ├── layout.tsx          # Layout avec filtres
│   │   └── page.tsx            # Grid de créations
│   │
│   ├── admin/                   # Panel Admin (protected)
│   │   ├── layout.tsx          # Layout admin
│   │   └── page.tsx            # Dashboard admin
│   │
│   ├── legal/                   # Pages légales RGPD
│   │   ├── mentions-legales/page.tsx
│   │   ├── confidentialite/page.tsx
│   │   ├── cookies/page.tsx
│   │   └── rgpd/page.tsx
│   │
│   ├── api/                     # API Routes Next.js 16
│   │   └── admin/              # API endpoints admin
│   │
│   ├── components/              # Composants React réutilisables
│   │   ├── Navigation.tsx      # Navbar avec drawer mobile
│   │   ├── Footer.tsx          # Footer avec liens légaux
│   │   └── SkipLink.tsx        # Accessibilité (skip to content)
│   │
│   ├── lib/                     # Utilitaires et configurations
│   │   ├── MUIRegistry.tsx     # Emotion cache pour MUI
│   │   ├── seo.ts              # Helpers SEO et metadata
│   │   └── structured-data.ts  # JSON-LD pour Open Graph
│   │
│   ├── theme/                   # Material-UI Theme
│   │   ├── theme.ts            # Configuration thème principal
│   │   └── tokens.ts           # Design tokens (couleurs, typo)
│   │
│   ├── types/                   # TypeScript definitions
│   │   └── index.ts            # Types globaux
│   │
│   └── data/                    # Données statiques
│       └── creations.json      # Base de données créations
│
├── public/                      # Assets statiques (servis à la racine)
│   ├── images/                 # Images des créations
│   ├── favicon.ico             # Favicon
│   ├── manifest.json           # PWA manifest
│   └── robots.txt              # Robots (fallback)
│
├── __tests__/                   # Tests Jest + RTL
│   ├── components/             # Tests composants
│   ├── pages/                  # Tests pages
│   └── lib/                    # Tests utilitaires
│
├── scripts/                     # Scripts utilitaires
│   └── update-creations.js     # Script de traitement CSV
│
├── .github/                     # GitHub Actions CI/CD
│   └── workflows/
│       └── ci-cd.yml           # Pipeline CI/CD
│
├── .husky/                      # Git hooks
│   └── pre-commit              # Lint avant commit
│
├── types/                       # TypeScript global types
│   └── global.d.ts             # Déclarations globales
│
├── next.config.js               # Configuration Next.js 16
├── tsconfig.json                # Configuration TypeScript
├── jest.config.js               # Configuration Jest
├── jest.setup.js                # Setup tests
├── .eslintrc.json               # Configuration ESLint
├── .prettierrc                  # Configuration Prettier
├── lighthouserc.js              # Configuration Lighthouse CI
├── vercel.json                  # Configuration Vercel
├── package.json                 # Dépendances et scripts
└── README.md                    # Documentation principale
```

## 🎯 Conventions Next.js 16 App Router

### File-System Based Routing
- `app/page.tsx` → `/`
- `app/about/page.tsx` → `/about`
- `app/gallery/page.tsx` → `/gallery`
- `app/admin/page.tsx` → `/admin`
- `app/legal/cookies/page.tsx` → `/legal/cookies`

### Special Files
- **layout.tsx**: Layout partagé entre pages enfants
- **page.tsx**: Composant de page (route publique)
- **loading.tsx**: État de chargement (Suspense)
- **error.tsx**: Gestion des erreurs
- **not-found.tsx**: Page 404
- **robots.ts**: Génération dynamique robots.txt
- **sitemap.ts**: Génération dynamique sitemap.xml

### Metadata API (Next.js 16)
```typescript
// app/page.tsx
export const metadata: Metadata = {
  title: 'Carineland',
  description: 'Créations artisanales',
  openGraph: {
    title: 'Carineland',
    description: 'Créations artisanales',
    images: ['/images/og-image.jpg'],
  },
}
```

## 🔧 Configuration Next.js 16

### next.config.js
```javascript
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'carineland.fr' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
  compress: true,
}
```

### Turbopack (Next.js 16)
- **Dev mode**: `npm run dev` utilise Turbopack automatiquement
- **Build**: Production optimisée avec Turbopack
- **HMR**: < 100ms avec Turbopack

## 📦 Composants Architecture

### Server Components (par défaut)
```typescript
// app/page.tsx - Server Component
export default async function HomePage() {
  const data = await fetchData() // Fetch côté serveur
  return <PageContent data={data} />
}
```

### Client Components ('use client')
```typescript
'use client' // Directive obligatoire
import { useState } from 'react'

export default function InteractiveComponent() {
  const [state, setState] = useState()
  return <button onClick={() => setState(...)}>Click</button>
}
```

## 🎨 Material-UI Integration

### Emotion Cache (app/lib/MUIRegistry.tsx)
```typescript
'use client'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

const cache = createCache({ key: 'css', prepend: true })

export default function MUIRegistry({ children }) {
  return <CacheProvider value={cache}>{children}</CacheProvider>
}
```

### Theme Provider (app/layout.tsx)
```typescript
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

## 🧪 Tests Architecture

### Jest Configuration
```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
  },
}
```

### Test Structure
```
__tests__/
├── components/
│   ├── Navigation.test.tsx
│   └── Footer.test.tsx
├── pages/
│   ├── home.test.tsx
│   └── gallery.test.tsx
└── lib/
    └── seo.test.ts
```

## 🚀 Performance Optimizations

### Image Optimization
```typescript
import Image from 'next/image'

<Image
  src="/images/creation.jpg"
  alt="Création"
  width={800}
  height={600}
  loading="lazy"
  placeholder="blur"
/>
```

### Font Optimization
```typescript
import { Montserrat, Lora } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'] })
```

### Bundle Optimization
- **Tree Shaking**: Imports optimisés
- **Code Splitting**: Automatic avec App Router
- **Dynamic Imports**: Pour composants lourds

## 📊 SEO & Accessibility

### Structured Data (JSON-LD)
```typescript
// app/lib/structured-data.ts
export function generateCreationSchema(creation) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: creation.name,
    image: creation.image,
  }
}
```

### Accessibility Features
- **ARIA labels**: Sur tous les éléments interactifs
- **Skip links**: Navigation clavier
- **Alt text**: Sur toutes les images
- **Focus management**: Ordre logique
- **Color contrast**: WCAG 2.1 AA compliant

## 🔐 Security

### Headers (next.config.js)
```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
      ],
    },
  ]
}
```

## 📈 Monitoring & Analytics

### Lighthouse CI
```javascript
// lighthouserc.js
module.exports = {
  ci: {
    collect: { numberOfRuns: 3 },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
      },
    },
  },
}
```

---

**Architecture conforme Next.js 16 Best Practices**  
✅ App Router  
✅ Server Components par défaut  
✅ Turbopack enabled  
✅ Material-UI v6 integration  
✅ TypeScript strict mode  
✅ SEO optimized  
✅ Accessibility compliant  
✅ Performance focused
