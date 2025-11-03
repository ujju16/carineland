# Documentation Strapi - Carineland Admin

## 🎯 Vue d'ensemble

Cette documentation décrit l'intégration de Strapi comme CMS headless pour le système d'administration de Carineland, permettant la gestion des créations artistiques.

## 📋 Table des matières

1. [Architecture](#architecture)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [API Routes](#api-routes)
5. [Authentification](#authentification)
6. [Gestion des créations](#gestion-des-créations)
7. [Tests](#tests)
8. [Déploiement](#déploiement)

## 🏗️ Architecture

### Structure du projet

```
app/
├── admin/
│   ├── layout.tsx          # SessionProvider wrapper
│   ├── page.tsx            # Page admin protégée
│   └── login/
│       └── page.tsx        # Page de connexion
├── api/
│   ├── auth/
│   │   └── [...nextauth]/
│   │       └── route.ts    # NextAuth configuration
│   └── creations/
│       └── route.ts        # API endpoints pour les créations
```

### Technologies utilisées

- **Next.js 16** - Framework React avec App Router
- **NextAuth.js** - Authentification
- **Material-UI v6** - Composants UI
- **Strapi** - CMS Headless (préparé pour intégration future)
- **TypeScript** - Type safety
- **Bun** - Package manager et runtime

## 🚀 Installation

### Prérequis

```bash
bun >= 1.2.0
Node.js >= 22.x (pour compatibility)
```

### Installation des dépendances

```bash
bun install
```

### Variables d'environnement

Créer ou mettre à jour `.env.local` :

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=carineland-super-secret-key-2024-change-in-production

# Admin Credentials (À changer en production!)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=CarinelandAdmin2024!

# Strapi Configuration (Pour intégration future)
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-strapi-api-token-here
```

## ⚙️ Configuration

### NextAuth Setup

Le fichier `app/api/auth/[...nextauth]/route.ts` configure l'authentification :

```typescript
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // Configuration des credentials
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      /* ... */
    },
    async session({ session, token }) {
      /* ... */
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 jours
  },
}
```

### Protection des routes

Les pages admin sont protégées via le hook `useSession` :

```typescript
const { data: session, status } = useSession()

useEffect(() => {
  if (status === 'unauthenticated') {
    router.push('/admin/login')
  }
}, [status, router])
```

## 🔐 Authentification

### Page de login

- URL: `/admin/login`
- Design Material Design avec gradient
- Validation côté client
- Messages d'erreur accessibles (ARIA)
- Champ mot de passe avec toggle visibilité

### Sécurité

- ✅ JWT tokens (30 jours de validité)
- ✅ Credentials hachés (préparé pour bcrypt)
- ✅ Session strategy
- ✅ Protection CSRF automatique via NextAuth
- ✅ Variables d'environnement pour credentials

### Flow d'authentification

1. Utilisateur accède à `/admin`
2. Redirection vers `/admin/login` si non authentifié
3. Soumission du formulaire
4. Vérification des credentials
5. Création du JWT token
6. Redirection vers `/admin`

## 📊 Gestion des créations

### État local (actuel)

Les créations sont actuellement gérées en mémoire locale avec le state React.

### Structure des données

```typescript
interface Creation {
  id: string
  title: string
  slug: string
  description: string
  imageUrl: string
  imageAlt: string
  category: 'couronne' | 'composition' | 'decoration'
  year: number
  materials: string[]
  dimensions: string
  available: boolean
  featured: boolean
  tags: string[]
  createdAt: string
  updatedAt: string
}
```

### Fonctionnalités implémentées

- ✅ Liste des créations avec grid responsive
- ✅ Ajout d'une nouvelle création
- ✅ Modification d'une création
- ✅ Suppression avec confirmation
- ✅ Marquage "À la une"
- ✅ Gestion des catégories
- ✅ Upload d'images (URL pour le moment)

## 🧪 Tests

### Tests unitaires

```bash
# Lancer tous les tests
bun run test

# Tests en mode watch
bun run test:watch

# Coverage
bun run test:coverage
```

### Tests à créer

- [ ] Tests d'authentification
- [ ] Tests des composants admin
- [ ] Tests des API routes
- [ ] Tests d'intégration
- [ ] Tests E2E avec Playwright

### Exemple de test

```typescript
// __tests__/admin/login.test.tsx
describe('Admin Login', () => {
  it('should render login form', () => {
    render(<AdminLoginPage />)
    expect(screen.getByLabelText(/nom d'utilisateur/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/mot de passe/i)).toBeInTheDocument()
  })

  it('should show error on invalid credentials', async () => {
    // Test implementation
  })
})
```

## ♿ Accessibilité (ARIA)

### Implémentation

- ✅ Attributs `role` appropriés
- ✅ Labels ARIA sur tous les champs
- ✅ `aria-required` sur champs obligatoires
- ✅ `aria-label` descriptifs
- ✅ `aria-live` pour les messages dynamiques
- ✅ Navigation au clavier
- ✅ Focus management
- ✅ Contraste des couleurs conforme WCAG 2.1 AA

### Éléments clés

```tsx
<TextField
  inputProps={{
    'aria-label': "Nom d'utilisateur",
    'aria-required': 'true',
  }}
/>

<Alert role="alert" aria-live="polite">
  {error}
</Alert>

<IconButton aria-label="Modifier la création">
  <EditIcon />
</IconButton>
```

## 🚀 Déploiement

### Environnement de développement

```bash
# Démarrer le serveur de dev
bun run dev

# Accéder à l'admin
http://localhost:3000/admin
```

### Build de production

```bash
# Build
bun run build

# Démarrer
bun run start
```

### Déploiement sur Vercel

1. Push sur GitHub
2. CI/CD automatique via GitHub Actions
3. Déploiement sur Vercel
4. Variables d'environnement configurées dans Vercel

#### Variables d'environnement Vercel

```env
NEXTAUTH_URL=https://carineland.fr
NEXTAUTH_SECRET=<généré-secure>
ADMIN_USERNAME=<secure-username>
ADMIN_PASSWORD=<secure-password-hash>
NEXT_PUBLIC_STRAPI_URL=<strapi-url>
STRAPI_API_TOKEN=<api-token>
```

## 🔮 Intégration Strapi (Roadmap)

### Installation Strapi

```bash
# Créer un nouveau projet Strapi
npx create-strapi-app@latest strapi-backend --quickstart

# Ou avec Docker
docker-compose up -d
```

### Collection Types à créer

#### Creation

- title (Text, required)
- slug (UID, required)
- description (Rich Text)
- image (Media)
- category (Enumeration: couronne, composition, decoration)
- year (Number)
- materials (JSON)
- dimensions (Text)
- available (Boolean)
- featured (Boolean)
- tags (JSON)

### API Endpoints Strapi

```
GET    /api/creations         # Liste toutes les créations
GET    /api/creations/:id     # Détails d'une création
POST   /api/creations         # Créer une création
PUT    /api/creations/:id     # Modifier une création
DELETE /api/creations/:id     # Supprimer une création
```

### Migration vers Strapi

```typescript
// app/api/creations/route.ts
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN

export async function GET() {
  const res = await fetch(`${STRAPI_URL}/api/creations`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  })
  const data = await res.json()
  return Response.json(data)
}
```

## 📊 Code Quality

### Linting

```bash
bun run lint
bun run lint:fix
```

### Formatting

```bash
bun run format
bun run format:check
```

### Type checking

```bash
bun run type-check
```

### Quality pipeline

```bash
bun run quality
```

## 🎨 Design System

### Palette de couleurs

```typescript
primary: '#667eea' → '#764ba2' (gradient)
secondary: Material Design defaults
background: '#fafafa'
```

### Composants Material-UI

- Paper avec elevation
- Cards responsives
- Dialogs modaux
- TextField avec validation
- Buttons avec loading states
- Icons avec aria-hidden

## 📝 Bonnes pratiques

### Code

- ✅ TypeScript strict mode
- ✅ ESLint + Prettier configurés
- ✅ Composants fonctionnels avec hooks
- ✅ Separation of concerns
- ✅ Error boundaries
- ✅ Loading states
- ✅ Optimistic UI updates

### Sécurité

- ✅ Variables d'environnement
- ✅ JWT tokens
- ✅ CORS configuré
- ✅ Rate limiting (à implémenter)
- ✅ Input sanitization (à renforcer)

### Performance

- ✅ Next.js Image optimization
- ✅ Code splitting automatique
- ✅ Lazy loading des composants
- ✅ Caching stratégique

## 🐛 Dépannage

### Problème: Session non persistante

```bash
# Vérifier NEXTAUTH_SECRET
echo $NEXTAUTH_SECRET

# Regenerer si nécessaire
openssl rand -base64 32
```

### Problème: Erreur CORS Strapi

```javascript
// strapi/config/middlewares.js
module.exports = [
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000', 'https://carineland.fr'],
    },
  },
]
```

## 👨‍💻 Contributeur

Développé par **@ujju16**

## 📄 Licence

Propriétaire - Carineland © 2024

---

**Note**: Cette documentation sera mise à jour au fur et à mesure de l'évolution du projet et de l'intégration complète de Strapi.
