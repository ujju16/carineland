# Code Quality & Testing Configuration

## Scripts Disponibles

### Quality Check Complete
```bash
npm run quality
```
Lance tous les checks de qualité :
- Type checking (TypeScript)
- Linting (ESLint)
- Format checking (Prettier)
- Tests (Jest)

### Tests
```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # With coverage report
```

### Lighthouse
```bash
npm run lighthouse     # Run Lighthouse on local server
npm run lighthouse:ci  # Run Lighthouse CI
```

### Dev avec Turbopack
```bash
npm run dev  # Utilise automatiquement --turbo
```

## Configuration

### Turbopack (Next.js 15)
Activé par défaut dans `npm run dev`
- Compilation ultra-rapide
- Hot Module Replacement optimisé
- Support SVG avec @svgr/webpack

### Lighthouse CI
Configuration dans `lighthouserc.js`
- Performance: min 90%
- Accessibility: min 90%
- Best Practices: min 90%
- SEO: min 90%

### Tests Coverage
- Navigation component
- Footer component
- SEO utilities
- Structured data

## Domain Configuration

**Domaine principal**: carineland.fr

Tous les liens et metadata utilisent maintenant `carineland.fr` :
- Sitemap: https://carineland.fr/sitemap.xml
- Robots.txt: https://carineland.fr/robots.txt
- Open Graph URLs
- Structured data (JSON-LD)

## CI/CD Integration

Le workflow GitHub Actions inclut maintenant :
1. Quality checks (type-check, lint, format)
2. Tests automatisés
3. Build validation
4. Lighthouse CI (optionnel)
5. Deployment Vercel

## Vercel Configuration

Pour configurer le domaine sur Vercel :
1. Aller dans Project Settings
2. Domains
3. Ajouter `carineland.fr`
4. Configurer les DNS records :
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

## Performance Targets

- **First Contentful Paint**: < 1.8s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.8s
- **Cumulative Layout Shift**: < 0.1
- **Total Blocking Time**: < 300ms

## Best Practices Implémentées

✅ TypeScript strict mode
✅ ESLint rules strictes
✅ Prettier formatting
✅ Unit tests (Jest)
✅ Lighthouse audits
✅ Turbopack enabled
✅ Domain configuration
✅ SEO optimization
✅ Accessibility (a11y)
✅ Performance monitoring

---

**Développé par @ujju16**
