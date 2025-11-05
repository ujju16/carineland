# Configuration Vercel - Variables d'environnement

## Variables à configurer sur Vercel

Allez sur: https://vercel.com/ujju16s-projects/carineland/settings/environment-variables

### Production & Preview & Development

Ajoutez ces variables pour tous les environnements:

```bash
# NextAuth Configuration
NEXTAUTH_URL=https://carineland.fr
NEXTAUTH_SECRET=carineland-super-secret-key-2024-change-in-production-make-it-very-long-and-secure

# Admin Credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD=CarinelandAdmin2024!

# Strapi Configuration (optionnel pour l'instant)
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-strapi-api-token-here
```

### Secrets GitHub Actions (déjà configurés)

- `VERCEL_TOKEN` ✅
- `VERCEL_ORG_ID` ✅
- `VERCEL_PROJECT_ID` ✅
- `CODECOV_TOKEN` ✅

## Commandes CLI Vercel

```bash
# Configurer les variables d'environnement via CLI
vercel env add NEXTAUTH_SECRET production preview development
vercel env add ADMIN_USERNAME production preview development
vercel env add ADMIN_PASSWORD production preview development
vercel env add NEXTAUTH_URL production preview development

# Pour NEXTAUTH_URL:
# - Production: https://carineland.fr
# - Preview: https://carineland-git-dev-ujju16s-projects.vercel.app
# - Development: http://localhost:3000
```

## Déploiements nommés

- **Production** (main): https://carineland.fr
- **Development** (dev): dev-carineland.vercel.app
- **Preview** (PR): URLs générées automatiquement avec numéro de PR

## Workflow

1. Push sur `main` → Déploiement Production
2. Push sur `dev` → Déploiement Development avec alias
3. Pull Request → Déploiement Preview avec commentaire automatique
