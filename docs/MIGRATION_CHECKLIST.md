# Checklist de Migration - Next.js 16 Structure

**Branche** : `structure-improvement-nextjs16`  
**Date de début** : 2025-11-06  
**Développeur** : @ujju16  
**Statut** : 🟡 En cours

---

## 📋 Phase 1 : Préparation (Estimé: 30 min)

- [x] Créer la branche `structure-improvement-nextjs16`
- [x] Créer la documentation complète
  - [x] NEXTJS16_STRUCTURE_ANALYSIS.md
  - [x] STRUCTURE_QUICK_VIEW.md
  - [x] MIGRATION_CHECKLIST.md (ce fichier)
- [ ] Vérifier que tous les tests passent avant modifications
  ```bash
  bun test
  bun run type-check
  bun run lint
  ```
- [ ] Créer un backup de la branche actuelle
  ```bash
  git branch backup-before-migration
  ```
- [ ] Créer la structure complète de `src/`
  ```bash
  mkdir -p src/{components/{ui,features/admin},lib/{auth,theme,utils},hooks,services,data}
  mkdir -p config
  ```

**Statut Phase 1** : ⏳ 50% (2/4 tâches)

---

## 📦 Phase 2 : Migration des Composants (Estimé: 1h)

### 2.1 Composants UI Globaux

- [ ] Déplacer `app/components/` vers `src/components/ui/`
  - [ ] Navigation.tsx
  - [ ] Footer.tsx
  - [ ] SkipLink.tsx
  - [ ] SessionProvider.tsx
  - [ ] Navigation.module.css
  
  ```bash
  mv app/components/Navigation.tsx src/components/ui/
  mv app/components/Footer.tsx src/components/ui/
  mv app/components/SkipLink.tsx src/components/ui/
  mv app/components/SessionProvider.tsx src/components/ui/
  mv app/components/Navigation.module.css src/components/ui/
  ```

- [ ] Supprimer les fichiers obsolètes
  ```bash
  rm app/components/Navigation.old.tsx
  ```

### 2.2 Composants Admin

- [ ] Créer `src/components/features/admin/`
- [ ] Déplacer `app/admin/components/*` vers `src/components/features/admin/`
  ```bash
  mv app/admin/components/* src/components/features/admin/
  ```

### 2.3 Mise à jour des Imports

- [ ] Mettre à jour `app/layout.tsx`
  ```typescript
  // Avant
  import Navigation from './components/Navigation'
  import Footer from './components/Footer'
  
  // Après
  import Navigation from '@/components/ui/Navigation'
  import Footer from '@/components/ui/Footer'
  ```

- [ ] Mettre à jour tous les fichiers utilisant ces composants
  - [ ] app/layout.tsx
  - [ ] app/about/page.tsx
  - [ ] app/gallery/page.tsx
  - [ ] app/admin/layout.tsx
  - [ ] app/admin/page.tsx
  - [ ] __tests__/navigation.test.tsx
  - [ ] __tests__/footer.test.tsx

- [ ] Tester le build
  ```bash
  bun run build
  ```

**Statut Phase 2** : ⏳ 0% (0/12 tâches)

---

## 🔧 Phase 3 : Migration des Utilitaires (Estimé: 30 min)

### 3.1 Bibliothèque Principale

- [ ] Déplacer `app/lib/` vers `src/lib/utils/`
  - [ ] MUIRegistry.tsx → src/lib/MUIRegistry.tsx
  - [ ] seo.ts → src/lib/utils/seo.ts
  - [ ] structured-data.ts → src/lib/utils/structured-data.ts
  
  ```bash
  mv app/lib/MUIRegistry.tsx src/lib/
  mkdir -p src/lib/utils
  mv app/lib/seo.ts src/lib/utils/
  mv app/lib/structured-data.ts src/lib/utils/
  ```

### 3.2 Thème

- [ ] Déplacer `app/theme/` vers `src/lib/theme/`
  ```bash
  mv app/theme src/lib/theme
  ```

### 3.3 Authentification

- [ ] Déplacer `auth.ts` (racine) vers `src/lib/auth/config.ts`
  ```bash
  mv auth.ts src/lib/auth/config.ts
  ```

### 3.4 Mise à jour des Imports

- [ ] Mettre à jour les imports de MUIRegistry
  - [ ] app/layout.tsx
  
- [ ] Mettre à jour les imports de seo/structured-data
  - [ ] app/layout.tsx
  - [ ] __tests__/seo.test.ts
  
- [ ] Mettre à jour les imports de theme
  - [ ] Tous les fichiers utilisant le thème
  
- [ ] Mettre à jour les imports de auth
  - [ ] app/api/auth/[...nextauth]/route.ts
  - [ ] app/admin/page.tsx
  - [ ] __tests__/api/auth.test.ts

- [ ] Tester le build
  ```bash
  bun run build
  ```

**Statut Phase 3** : ⏳ 0% (0/9 tâches)

---

## 📊 Phase 4 : Migration Types et Data (Estimé: 20 min)

### 4.1 Types

- [ ] Analyser `app/types/` et `types/`
- [ ] Fusionner le contenu sans duplication
- [ ] Supprimer `app/types/`
- [ ] S'assurer que tout est dans `types/`

### 4.2 Data

- [ ] Déplacer `app/data/` vers `src/data/`
  ```bash
  mv app/data src/data
  ```

- [ ] Mettre à jour les imports de data
  - [ ] app/gallery/page.tsx
  - [ ] Tous les fichiers utilisant creations.json

- [ ] Tester le build
  ```bash
  bun run build
  ```

**Statut Phase 4** : ⏳ 0% (0/6 tâches)

---

## 🗂️ Phase 5 : Route Groups (Estimé: 1h)

### 5.1 Créer les Route Groups

- [ ] Créer `app/(marketing)/`
  ```bash
  mkdir -p app/\(marketing\)
  ```

- [ ] Créer `app/(admin)/`
  ```bash
  mkdir -p app/\(admin\)
  ```

- [ ] Créer `app/(legal)/`
  ```bash
  mkdir -p app/\(legal\)
  ```

### 5.2 Déplacer les Routes Marketing

- [ ] Créer `app/(marketing)/layout.tsx`
- [ ] Déplacer `app/about/` → `app/(marketing)/about/`
- [ ] Déplacer `app/gallery/` → `app/(marketing)/gallery/`
- [ ] Déplacer `app/page.tsx` → `app/(marketing)/page.tsx`
- [ ] Déplacer `app/page.module.css` → `app/(marketing)/page.module.css`

### 5.3 Déplacer les Routes Admin

- [ ] Créer `app/(admin)/layout.tsx`
- [ ] Déplacer `app/admin/` → `app/(admin)/admin/`

### 5.4 Déplacer les Routes Légales

- [ ] Créer `app/(legal)/layout.tsx`
- [ ] Déplacer `app/legal/` → `app/(legal)/legal/`

### 5.5 Ajouter Loading States

- [ ] Créer `app/(marketing)/loading.tsx`
- [ ] Créer `app/(marketing)/gallery/loading.tsx`
- [ ] Créer `app/(admin)/loading.tsx`

### 5.6 Ajouter Error Boundaries

- [ ] Créer `app/(marketing)/error.tsx`
- [ ] Créer `app/(admin)/error.tsx`
- [ ] Créer `app/(legal)/error.tsx`

### 5.7 Tests

- [ ] Tester toutes les routes
  - [ ] / (home)
  - [ ] /about
  - [ ] /gallery
  - [ ] /admin
  - [ ] /admin/login
  - [ ] /legal/*
  
- [ ] Tester les loading states
- [ ] Tester les error boundaries
- [ ] Tester le build
  ```bash
  bun run build
  ```

**Statut Phase 5** : ⏳ 0% (0/21 tâches)

---

## ⚙️ Phase 6 : Configuration (Estimé: 30 min)

### 6.1 Path Aliases

- [ ] Mettre à jour `tsconfig.json`
  ```json
  {
    "compilerOptions": {
      "paths": {
        "@/components/*": ["./src/components/*"],
        "@/lib/*": ["./src/lib/*"],
        "@/hooks/*": ["./src/hooks/*"],
        "@/services/*": ["./src/services/*"],
        "@/types/*": ["./types/*"],
        "@/data/*": ["./src/data/*"],
        "@/config/*": ["./config/*"]
      }
    }
  }
  ```

- [ ] Vérifier la compilation TypeScript
  ```bash
  bun run type-check
  ```

### 6.2 Configuration Centralisée

- [ ] Créer `config/site.config.ts`
  ```typescript
  export const siteConfig = {
    name: 'Carineland',
    description: '...',
    url: 'https://carineland.fr',
    // ...
  }
  ```

- [ ] Créer `config/seo.config.ts`
- [ ] Créer `config/constants.ts`

### 6.3 Nettoyage

- [ ] Supprimer tous les fichiers `.old.*`
  ```bash
  find . -name "*.old.*" -delete
  ```

- [ ] Supprimer les dossiers vides dans `app/`
  ```bash
  find app/ -type d -empty -delete
  ```

- [ ] Mettre à jour `.gitignore` si nécessaire

**Statut Phase 6** : ⏳ 0% (0/8 tâches)

---

## 🧪 Phase 7 : Tests et Validation (Estimé: 1h)

### 7.1 Tests Unitaires

- [ ] Lancer les tests
  ```bash
  bun test
  ```

- [ ] Corriger les tests cassés (imports, etc.)
- [ ] Vérifier la couverture
  ```bash
  bun run test:coverage
  ```

### 7.2 Vérifications TypeScript

- [ ] Type checking
  ```bash
  bun run type-check
  ```

- [ ] Corriger les erreurs de types

### 7.3 Linting

- [ ] Lancer le linter
  ```bash
  bun run lint
  ```

- [ ] Auto-fix si possible
  ```bash
  bun run lint:fix
  ```

- [ ] Formatter le code
  ```bash
  bun run format
  ```

### 7.4 Build et Performance

- [ ] Build de production
  ```bash
  bun run build
  ```

- [ ] Vérifier la taille du bundle
  ```bash
  du -sh .next
  ```

- [ ] Comparer avec l'ancien build (si disponible)

### 7.5 Tests Manuels

- [ ] Démarrer le serveur de dev
  ```bash
  bun dev
  ```

- [ ] Tester toutes les pages
  - [ ] Page d'accueil
  - [ ] À propos
  - [ ] Galerie
  - [ ] Admin login
  - [ ] Admin dashboard
  - [ ] Pages légales
  
- [ ] Tester la navigation
- [ ] Tester les loading states
- [ ] Tester les error boundaries

### 7.6 Lighthouse

- [ ] Lancer Lighthouse CI
  ```bash
  bun run lighthouse:ci
  ```

- [ ] Vérifier les scores
  - [ ] Performance ≥ 90
  - [ ] Accessibility ≥ 95
  - [ ] Best Practices ≥ 90
  - [ ] SEO ≥ 95

### 7.7 Déploiement Preview

- [ ] Déployer sur Vercel Preview
  ```bash
  vercel --prod=false
  ```

- [ ] Tester l'environnement de preview
- [ ] Vérifier les logs Vercel

**Statut Phase 7** : ⏳ 0% (0/19 tâches)

---

## 🚀 Phase 8 : Pull Request et Merge (Estimé: 30 min)

### 8.1 Préparation de la PR

- [ ] S'assurer que tout est committé
  ```bash
  git status
  ```

- [ ] Rebaser sur main si nécessaire
  ```bash
  git fetch origin
  git rebase origin/main
  ```

- [ ] Pusher la branche
  ```bash
  git push origin structure-improvement-nextjs16
  ```

### 8.2 Création de la PR

- [ ] Créer la PR avec `gh`
  ```bash
  gh pr create \
    --title "feat: migrate to Next.js 16 recommended structure" \
    --body "$(cat docs/MIGRATION_PR_TEMPLATE.md)" \
    --base main \
    --head structure-improvement-nextjs16
  ```

- [ ] Ajouter les labels appropriés
  ```bash
  gh pr edit --add-label "enhancement,documentation,breaking-change"
  ```

### 8.3 Review

- [ ] Auto-review du code
- [ ] Vérifier que tous les checks CI/CD passent
- [ ] Vérifier le preview deployment Vercel
- [ ] Demander une revue si nécessaire

### 8.4 Merge

- [ ] Merger la PR
  ```bash
  gh pr merge --squash
  ```

- [ ] Supprimer la branche locale
  ```bash
  git checkout main
  git pull
  git branch -d structure-improvement-nextjs16
  ```

- [ ] Vérifier le déploiement en production

### 8.5 Documentation

- [ ] Mettre à jour le README principal si nécessaire
- [ ] Mettre à jour la documentation de contribution
- [ ] Créer une release note si approprié

**Statut Phase 8** : ⏳ 0% (0/11 tâches)

---

## 📈 Progression Globale

| Phase | Statut | Progression | Temps Estimé | Temps Réel |
|-------|--------|-------------|--------------|------------|
| **Phase 1** : Préparation | 🟡 En cours | 50% (2/4) | 30 min | - |
| **Phase 2** : Composants | ⏳ Pas commencé | 0% (0/12) | 1h | - |
| **Phase 3** : Utilitaires | ⏳ Pas commencé | 0% (0/9) | 30 min | - |
| **Phase 4** : Types/Data | ⏳ Pas commencé | 0% (0/6) | 20 min | - |
| **Phase 5** : Route Groups | ⏳ Pas commencé | 0% (0/21) | 1h | - |
| **Phase 6** : Configuration | ⏳ Pas commencé | 0% (0/8) | 30 min | - |
| **Phase 7** : Tests | ⏳ Pas commencé | 0% (0/19) | 1h | - |
| **Phase 8** : PR & Merge | ⏳ Pas commencé | 0% (0/11) | 30 min | - |

**Total** : 2% (2/90 tâches) - Temps estimé restant: ~5h

---

## 🎯 Objectifs de Qualité

### Code Quality

- [ ] ✅ Type checking passe à 100%
- [ ] ✅ Linting passe sans warnings
- [ ] ✅ Formatting conforme à Prettier
- [ ] ✅ Aucun fichier `.old.*` restant
- [ ] ✅ Aucun import relatif complexe (`../../../`)

### Tests

- [ ] ✅ Tous les tests passent
- [ ] ✅ Couverture ≥ 80%
- [ ] ✅ Aucun test `skip` ou `todo`

### Performance

- [ ] ✅ Bundle size n'augmente pas
- [ ] ✅ Lighthouse Performance ≥ 90
- [ ] ✅ Lighthouse Accessibility ≥ 95
- [ ] ✅ Time to First Byte < 600ms

### CI/CD

- [ ] ✅ Tous les checks CI/CD passent
- [ ] ✅ Déploiement Vercel réussi
- [ ] ✅ Aucune régression détectée

---

## 📝 Notes de Migration

### Problèmes Rencontrés

_À remplir pendant la migration_

### Solutions Appliquées

_À remplir pendant la migration_

### Temps Réel par Phase

_À remplir pendant la migration_

---

## ✅ Validation Finale

- [ ] Tous les tests passent
- [ ] Build de production réussi
- [ ] Déploiement Vercel OK
- [ ] Lighthouse scores maintenus
- [ ] Documentation mise à jour
- [ ] PR mergée
- [ ] Site en production fonctionne correctement

---

**Développé par** : @ujju16  
**Dernière mise à jour** : 2025-11-06  
**Statut Global** : 🟡 En cours (2%)
