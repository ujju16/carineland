# 📊 Schéma Admin - Résumé Visuel

## Vue d'ensemble rapide du schéma de données de l'administration

---

## 🎨 Modèle Creation (Principal)

```typescript
Creation {
  // 🆔 Identifiants
  id: string
  slug: string
  
  // 📝 Contenu
  title: string ✓ requis
  description: string ✓ requis
  
  // 🖼️ Média
  imageUrl: string
  imageAlt: string
  
  // 🏷️ Classification
  category: 'couronne' | 'composition' | 'decoration' | 'sculpture' | 'autre'
  tags: string[]
  
  // 🔧 Détails
  year: number
  materials: string[]
  dimensions: string
  
  // 💰 Commerce
  price?: number
  available: boolean
  featured: boolean
  
  // ⏱️ Timestamps
  createdAt: string
  updatedAt: string
}
```

---

## 🔐 Modèle AdminUser

```typescript
AdminUser {
  id: string
  email: string
  role: 'admin' | 'editor'
}
```

---

## 🎯 États de l'Application

### État Admin Principal

```
AdminState
├── creations: Creation[]
├── loading: boolean
├── error: string | null
├── UI State
│   ├── openDialog: boolean
│   ├── editingCreation: Creation | null
│   └── selectedCreations: string[]
├── filters
│   ├── category: string | null
│   ├── search: string
│   └── featured: boolean | null
└── pagination
    ├── page: number
    ├── pageSize: number
    └── total: number
```

---

## 🔌 API Endpoints

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/creations` | Liste toutes les créations |
| GET | `/api/creations/:id` | Détails d'une création |
| POST | `/api/creations` | Créer une création |
| PUT | `/api/creations/:id` | Modifier une création |
| DELETE | `/api/creations/:id` | Supprimer une création |

### Query Parameters (GET)

```
?category=sculpture
&featured=true
&search=bois
&page=1
&limit=20
&sortBy=createdAt
&sortOrder=desc
```

---

## ✅ Validations Principales

| Champ | Règle | Min | Max |
|-------|-------|-----|-----|
| title | Requis, texte | 3 | 100 |
| description | Requis, texte | 10 | 1000 |
| category | Enum | - | - |
| year | Nombre | 2000 | Actuelle |
| price | Nombre positif | 0 | ∞ |
| materials | Array | 0 | 10 |
| tags | Array | 0 | 20 |

---

## 📦 Exemple de Données

### Création Complète

```json
{
  "id": "creation-42",
  "title": "Couronne de Noël en bois flotté",
  "slug": "couronne-de-noel-en-bois-flotte",
  "description": "Magnifique couronne artisanale...",
  "imageUrl": "/creations/couronne-noel-2024.jpg",
  "imageAlt": "Couronne de Noël artisanale...",
  "category": "couronne",
  "year": 2024,
  "materials": ["bois flotté", "pommes de pin", "ruban satin"],
  "dimensions": "Diamètre 35cm, épaisseur 8cm",
  "price": 45.00,
  "available": true,
  "featured": true,
  "tags": ["noël", "hiver", "couronne", "fait main"],
  "createdAt": "2024-11-01T14:30:00.000Z",
  "updatedAt": "2024-11-05T09:15:00.000Z"
}
```

---

## 🔄 Flux de Données

### Création d'une Nouvelle Création

```
Utilisateur
    ↓
[Clique "Nouvelle Création"]
    ↓
Dialog avec formulaire
    ↓
Validation formulaire
    ↓ ✓ Valide
Sauvegarde État Local
    ↓
Ferme Dialog
    ↓
Rafraîchit Liste
```

### Modification d'une Création

```
Liste des créations
    ↓
[Clique "Éditer"]
    ↓
Charge données dans formulaire
    ↓
Dialog pré-rempli
    ↓
Modification + Validation
    ↓ ✓ Valide
Met à jour État
    ↓
Ferme Dialog
    ↓
Rafraîchit Liste
```

---

## 🗄️ Structure Actuelle vs Future

### Actuel (JSON Local)

```
app/data/creations.json
    ↓
React State
    ↓
Composants
```

### Futur (Strapi)

```
Strapi CMS
    ↓
API REST
    ↓
Next.js API Routes
    ↓
React State (avec cache)
    ↓
Composants
```

---

## 📊 Statistiques & Métriques

### Métriques Trackées

```typescript
{
  totalCreations: number
  featuredCreations: number
  availableCreations: number
  creationsByCategory: {
    couronne: number
    composition: number
    decoration: number
    sculpture: number
  }
  creationsByYear: {
    2023: number
    2024: number
  }
  averagePrice: number
  mostUsedMaterials: [
    { material: "bois flotté", count: 10 }
  ]
  mostUsedTags: [
    { tag: "fait main", count: 15 }
  ]
}
```

---

## 🔒 Sécurité

### Protection Admin

```
1. Authentication (NextAuth)
   ↓
2. JWT Token Validation
   ↓
3. Session Check
   ↓
4. Role Verification
   ↓
5. Access Granted ✓
```

### Validations

- ✅ Client-side (React)
- ✅ Server-side (API Routes)
- ✅ Database (Strapi)
- ✅ Sanitization XSS
- ✅ Rate Limiting

---

## 🎨 UI Components Admin

```
AdminPage
├── Header
│   ├── Title
│   ├── User Info
│   └── Actions
│       ├── New Creation Button
│       └── Logout Button
├── CreationsList (Grid)
│   └── CreationCard (x N)
│       ├── Image
│       ├── Content
│       │   ├── Category Badge
│       │   ├── Featured Badge
│       │   ├── Title
│       │   └── Description
│       └── Actions
│           ├── Edit Button
│           └── Delete Button
└── CreateEditDialog
    ├── Title
    ├── Form
    │   ├── Title Field
    │   ├── Description Field
    │   ├── Image URL Field
    │   ├── Category Select
    │   └── Featured Toggle
    └── Actions
        ├── Cancel Button
        └── Save Button
```

---

## 🚀 Quick Reference

### Créer une création

```typescript
const newCreation: Creation = {
  id: Date.now().toString(),
  title: "Ma création",
  slug: "ma-creation",
  description: "Description...",
  imageUrl: "/path/to/image.jpg",
  imageAlt: "Description image",
  category: "couronne",
  year: 2024,
  materials: ["bois"],
  dimensions: "30cm",
  available: true,
  featured: false,
  tags: ["tag1"],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
}
```

### Filtrer les créations

```typescript
const filtered = creations.filter(c => 
  (!category || c.category === category) &&
  (!featured || c.featured === featured) &&
  (!search || c.title.toLowerCase().includes(search.toLowerCase()))
)
```

---

## 📚 Documentation Complète

Pour plus de détails, consultez :
- **[ADMIN_DATA_SCHEMA.md](./ADMIN_DATA_SCHEMA.md)** - Documentation complète
- **[STRAPI_ADMIN_DOCUMENTATION.md](./STRAPI_ADMIN_DOCUMENTATION.md)** - Admin & Strapi
- **[INDEX.md](./INDEX.md)** - Index de toute la documentation

---

**Version**: 1.0.0  
**Date**: 6 novembre 2024  
**Développé par**: @ujju16
