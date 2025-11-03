# Code Quality Setup 🎯

## Overview

Ce document décrit la configuration complète de la qualité de code pour le projet Carineland.

## Tools & Services

### 1. **CodeCov** - Code Coverage

**Configuration**: `codecov.yml`

- **Coverage Target**: 70% minimum
- **Threshold**: 5% tolérance
- **Ignore**: Tests, configs, types
- **Reports**: JSON, LCOV, Text, Clover

**Setup**:

```bash
# 1. Aller sur https://codecov.io/
# 2. Connecter le repository GitHub
# 3. Copier le token dans GitHub Secrets: CODECOV_TOKEN
```

### 2. **ESLint** - Linting

**Configuration**: `.eslintrc.json`

- Next.js + TypeScript rules
- Prettier integration
- Auto-fix on save

**Commands**:

```bash
bun run lint        # Check linting
bun run lint:fix    # Auto-fix issues
```

### 3. **Prettier** - Code Formatting

**Configuration**: `.prettierrc`

- Consistent code style
- Auto-format on commit
- Pre-commit hooks with Husky

**Commands**:

```bash
bun run format        # Format all files
bun run format:check  # Check formatting
```

### 4. **TypeScript** - Type Checking

**Configuration**: `tsconfig.json`

- Strict mode enabled
- Path aliases configured
- Next.js integration

**Commands**:

```bash
bun run type-check  # Check types
```

### 5. **Jest** - Testing

**Configuration**: `jest.config.js`

- React Testing Library
- Coverage reporting
- JSDOM environment

**Commands**:

```bash
bun test              # Run tests
bun run test:watch    # Watch mode
bun run test:coverage # Coverage report
```

### 6. **Lighthouse** - Performance

**Configuration**: `lighthouserc.js`

- Performance audits
- Accessibility checks
- Best practices
- SEO validation

**Commands**:

```bash
bun run lighthouse      # Local audit
bun run lighthouse:ci   # CI audit
```

### 7. **Husky** - Git Hooks

**Configuration**: `.husky/`

- Pre-commit: Lint + Format
- Pre-push: Type-check + Tests

**Setup**:

```bash
bun run prepare  # Initialize hooks
```

## CI/CD Integration

### GitHub Actions

**Workflow**: `.github/workflows/ci.yml`

#### Quality Check Job

1. Type checking
2. Format validation
3. Linting

#### Test Job

1. Unit tests
2. Integration tests
3. Coverage upload to CodeCov

#### Build Job

1. Next.js build
2. Artifact upload

#### Deploy Jobs

1. **Dev branch** → Vercel Preview
2. **Main branch** → Vercel Production

## Quality Metrics

### Target Scores

| Metric                    | Target | Status |
| ------------------------- | ------ | ------ |
| Code Coverage             | 70%+   | ✅     |
| Lighthouse Performance    | 95+    | ✅     |
| Lighthouse Accessibility  | 95+    | ✅     |
| Lighthouse Best Practices | 95+    | ✅     |
| Lighthouse SEO            | 100    | ✅     |
| ESLint Issues             | 0      | ✅     |
| TypeScript Errors         | 0      | ✅     |

### Code Quality Standards

1. **Test Coverage**: Minimum 70% sur tous les fichiers
2. **Type Safety**: TypeScript strict mode
3. **Code Style**: Prettier + ESLint
4. **Performance**: Lighthouse 95+
5. **Accessibility**: WCAG 2.1 AA
6. **SEO**: Score 100

## Architecture Compliance

### Next.js 16 Best Practices

✅ **App Router Structure**

```
app/
├── (routes)/         # Route groups
├── components/       # Shared components
├── lib/             # Utilities
├── theme/           # MUI theme
├── types/           # TypeScript types
└── api/             # API routes
```

✅ **Features**

- Server Components par défaut
- Client Components (`use client`) uniquement si nécessaire
- Metadata API pour SEO
- Image optimization avec `next/image`
- Font optimization avec `next/font`
- Turbopack enabled

✅ **Performance**

- Code splitting automatique
- Lazy loading des composants
- Image optimization
- CSS-in-JS avec Emotion
- Caching strategies

## Security

### Audit Tools

1. **npm audit**: Dépendances
2. **Snyk**: Vulnerabilities scanning
3. **Dependabot**: Auto-updates

### Best Practices

- Environment variables sécurisées
- HTTPS only
- CORS configuré
- CSP headers
- Rate limiting

## Monitoring

### Grafana + Prometheus

**Services**:

- Application metrics
- System metrics (CPU, RAM, Disk)
- Network metrics
- Custom business metrics

**Access**:

- Grafana: http://localhost:3001
- Prometheus: http://localhost:9090

## Documentation

### Required Docs

✅ **Technical**

- README.md - Getting started
- ARCHITECTURE.md - System design
- DOCUMENTATION.md - Full docs

✅ **Quality**

- QUALITY_CONFIG.md - This file
- ACCESSIBILITY.md - A11y guidelines
- TESTING.md - Test strategies

✅ **Operations**

- DEPLOYMENT.md - Deploy process
- MONITORING.md - Grafana setup
- TROUBLESHOOTING.md - Common issues

## Badges

All badges are configured in README.md avec style `for-the-badge` et thème dark (`labelColor=1e293b`).

### Available Badges

**Tech Stack**:

- Next.js, React, TypeScript, MUI, Bun

**CI/CD**:

- Pipeline status, Vercel, Turbopack

**Quality**:

- CodeCov, Code Climate, Lighthouse, Coverage, Snyk

**Accessibility**:

- WCAG, RGPD, SEO, Mobile First, ARIA

**Monitoring**:

- Grafana, Prometheus, Dependencies

**Project**:

- License, PRs, Last Commit, Issues

## Next Steps

1. ✅ Configure CodeCov token in GitHub Secrets
2. ✅ Run full test suite
3. ✅ Verify all CI/CD jobs pass
4. ✅ Monitor Lighthouse scores
5. ✅ Check CodeCov reports
6. ✅ Review security audits

## Maintenance

### Weekly Tasks

- [ ] Check dependency updates
- [ ] Review security advisories
- [ ] Monitor Lighthouse scores
- [ ] Check error logs in Grafana

### Monthly Tasks

- [ ] Full security audit
- [ ] Performance review
- [ ] Code quality review
- [ ] Documentation updates

## Resources

- [Next.js 16 Docs](https://nextjs.org/docs)
- [CodeCov Docs](https://docs.codecov.com/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Jest Best Practices](https://jestjs.io/docs/getting-started)
- [ESLint Rules](https://eslint.org/docs/rules/)

---

**Updated**: 2025-11-03
**Maintainer**: @ujju16
