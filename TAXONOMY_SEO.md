# 🎯 Taxonomie & Architecture SEO - Carineland

## 📊 Structure Hiérarchique du Site

```
Carineland (Root)
│
├── 🏠 Accueil (/)
│   ├── Hero Section
│   ├── Features (Nature, Passion, Unicité)
│   ├── CTA Gallery
│   └── Footer
│
├── 🖼️ Galerie (/gallery)
│   ├── Toutes les créations
│   ├── Filtres par catégorie
│   │   ├── Couronnes
│   │   ├── Compositions
│   │   └── Décorations
│   └── Recherche dynamique
│
├── ℹ️ À Propos (/about)
│   ├── Notre Histoire
│   ├── Notre Passion
│   └── Engagement Écologique
│
└── 👑 Admin (/admin)
    └── Panel de gestion (Disallow robots)
```

## 🏷️ Taxonomie des Contenus

### Niveau 1 : Catégories Principales
```
1. Créations
   └── Types de produits artisanaux

2. À Propos
   └── Information sur l'artisan et la marque

3. Administration
   └── Gestion du contenu (privé)
```

### Niveau 2 : Catégories de Créations
```
Créations/
├── Couronnes
│   ├── Couronne de lierre naturel
│   ├── Couronne saisonnière
│   └── Couronne décorative
│
├── Compositions
│   ├── Composition florale
│   ├── Arrangement végétal
│   └── Bouquet naturel
│
└── Décorations
    ├── Décoration murale
    ├── Centre de table
    └── Ornement nature
```

### Niveau 3 : Attributs des Créations
```
Chaque Création possède:
├── ID unique
├── Titre
├── Description
├── Catégorie (taxonomie niveau 2)
├── Image
├── Prix (optionnel)
├── Featured (mise en avant)
├── Date de création
└── Date de modification
```

## 🔍 Mots-clés SEO par Page

### Homepage (/)
**Mots-clés principaux:**
- Carineland
- Créations artisanales
- Lierre naturel
- Artisanat nature
- Fait main

**Mots-clés secondaires:**
- Décoration naturelle
- Artisan français
- Éco-responsable
- Unique
- Passion nature

**Long-tail:**
- "Créations artisanales à base de lierre"
- "Décoration naturelle fait main"
- "Artisan créations nature France"

### Galerie (/gallery)
**Mots-clés principaux:**
- Galerie créations
- Couronnes lierre
- Compositions florales
- Décorations nature

**Mots-clés secondaires:**
- Artisanat végétal
- Créations uniques
- Fait main nature
- Décor écologique

**Long-tail:**
- "Couronne de lierre naturel fait main"
- "Composition florale artisanale"
- "Décoration murale nature écologique"

### À Propos (/about)
**Mots-clés principaux:**
- Artisan nature
- Histoire Carineland
- Passion artisanat
- Engagement écologique

**Mots-clés secondaires:**
- Créateur
- Philosophie
- Développement durable
- Artisanat responsable

**Long-tail:**
- "Artisan passionné par la nature"
- "Créations écologiques et durables"
- "Histoire d'un artisan français"

## 📋 Balises Meta par Page

### Homepage
```html
Title: Carineland - Créations Artisanales Naturelles
Description: Découvrez les créations artisanales uniques de Carine : couronnes de lierre, compositions florales et décorations naturelles faites main.
Keywords: artisanat, nature, lierre, créations artisanales, fait main, décoration naturelle
```

### Galerie
```html
Title: Galerie - Créations Artisanales | Carineland
Description: Toutes nos créations : couronnes de lierre naturel, compositions florales uniques et décorations écologiques faites main.
Keywords: galerie, créations artisanales, couronnes lierre, compositions florales, décorations nature
```

### À Propos
```html
Title: À Propos - Notre Histoire | Carineland
Description: Découvrez l'histoire de Carineland, notre passion pour l'artisanat naturel et notre engagement écologique.
Keywords: à propos, histoire, artisan, passion nature, écologique, développement durable
```

## 🌐 Open Graph Structure

### Homepage
```json
{
  "og:type": "website",
  "og:locale": "fr_FR",
  "og:site_name": "Carineland",
  "og:title": "Carineland - Créations Artisanales Naturelles",
  "og:description": "Créations artisanales uniques à base de lierre",
  "og:url": "https://carineland.fr",
  "og:image": "https://carineland.fr/og-image.jpg",
  "og:image:width": "1200",
  "og:image:height": "630"
}
```

### Création Individuelle
```json
{
  "og:type": "product",
  "og:title": "[Nom Création] - Carineland",
  "og:description": "[Description de la création]",
  "og:url": "https://carineland.fr/gallery/[id]",
  "og:image": "[URL image création]",
  "og:price:amount": "[Prix]",
  "og:price:currency": "EUR",
  "product:category": "[Catégorie]",
  "product:availability": "in stock"
}
```

## 🤖 Robots.txt Configuration

```txt
User-agent: *
Allow: /

# Bloquer l'admin et les API
Disallow: /admin
Disallow: /api/

# Bloquer les fichiers de backup
Disallow: /*.old.tsx$

# Sitemap
Sitemap: https://carineland.fr/sitemap.xml
```

## 🗺️ Sitemap Structure

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage - Priorité maximale -->
  <url>
    <loc>https://carineland.fr/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Galerie - Mise à jour quotidienne -->
  <url>
    <loc>https://carineland.fr/gallery</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- À Propos - Stable -->
  <url>
    <loc>https://carineland.fr/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Créations individuelles (dynamique) -->
  <url>
    <loc>https://carineland.fr/gallery/[creation-id]</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

## 🏗️ Schema.org / JSON-LD

### Organization
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Carineland",
  "url": "https://carineland.fr",
  "logo": "https://carineland.fr/logo.png",
  "description": "Créations artisanales à base de lierre et nature",
  "founder": {
    "@type": "Person",
    "name": "Carine"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR"
  }
}
```

### Product (pour chaque création)
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "[Titre Création]",
  "description": "[Description]",
  "image": "[URL Image]",
  "brand": {
    "@type": "Brand",
    "name": "Carineland"
  },
  "offers": {
    "@type": "Offer",
    "price": "[Prix]",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  }
}
```

### BreadcrumbList
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://carineland.fr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Galerie",
      "item": "https://carineland.fr/gallery"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[Création]",
      "item": "https://carineland.fr/gallery/[id]"
    }
  ]
}
```

## 📊 Priorités SEO

### Pages Publiques (Indexées)
```
Priority 1.0 - Homepage (/)
Priority 0.9 - Galerie (/gallery)
Priority 0.8 - À Propos (/about)
Priority 0.7 - Créations individuelles
```

### Pages Privées (Non-indexées)
```
noindex, nofollow - Admin (/admin)
noindex, nofollow - API routes (/api/*)
```

## 🎯 Stratégie de Contenu SEO

### Optimisations On-Page
✓ Balises title uniques par page
✓ Meta descriptions optimisées
✓ Heading hierarchy (H1 → H6)
✓ Alt text sur toutes les images
✓ URL slugs descriptifs
✓ Internal linking strategy
✓ Mobile-first design
✓ Performance optimale (Core Web Vitals)

### Rich Snippets
✓ Product markup (créations)
✓ Organization markup
✓ BreadcrumbList
✓ SearchAction
✓ Local Business (si applicable)

### Social Sharing
✓ Open Graph tags
✓ Twitter Card
✓ Images optimisées 1200x630px
✓ Descriptions captivantes

## 📈 KPIs SEO à Suivre

1. **Visibilité**
   - Position moyenne sur Google
   - Impressions
   - Clics organiques

2. **Engagement**
   - Taux de clic (CTR)
   - Temps sur page
   - Taux de rebond

3. **Technique**
   - Core Web Vitals
   - Mobile usability
   - Indexation pages

4. **Conversions**
   - Visites galerie
   - Contact admin
   - Partages sociaux

---

**🌿 Carineland - SEO Optimisé pour la Visibilité 🌿**
