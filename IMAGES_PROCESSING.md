# Images & Creations Processing

Ce document explique comment les images et données des créations sont gérées dans le projet.

## 📂 Structure

```
public/
├── images/              # Images originales (JPG)
└── creations/          # Images pour la galerie (copiées)

app/
└── data/
    └── creations.json  # Données structurées des créations
```

## 📋 Fichier Source

**carineland.csv** contient la liste des créations avec :

- Nom du fichier original
- Description de l'œuvre
- Nouveau nom WebP (non utilisé pour le moment)

## 🔄 Traitement des Créations

### Script de traitement

```bash
npm run process-creations
```

Ce script (`scripts/update-creations.js`) :

1. Lit le fichier `carineland.csv`
2. Extrait les métadonnées de chaque création
3. Catégorise automatiquement les créations
4. Génère les tags pertinents
5. Crée `app/data/creations.json`

### Données extraites

Pour chaque création :

- **id** : Identifiant unique
- **title** : Titre extrait de la description
- **slug** : URL-friendly slug
- **description** : Description complète
- **category** : sculpture | peinture | composition | mobilier | autre
- **imageUrl** : Chemin vers l'image
- **imageAlt** : Texte alternatif pour accessibilité
- **year** : Année extraite du nom du fichier (YYYYMMDD)
- **materials** : Liste des matériaux détectés
- **dimensions** : Estimation des dimensions
- **available** : Disponibilité (true par défaut)
- **featured** : Mis en avant (3 premiers)
- **tags** : Tags générés automatiquement
- **createdAt** / **updatedAt** : Timestamps

## 🏷️ Catégorisation Automatique

Le script catégorise selon les mots-clés :

- **peinture** : "peinture"
- **sculpture** : "bois", "racines", "insecte"
- **composition** : "composition", "vinyles"
- **mobilier** : "table", "tabouret"
- **autre** : par défaut

## 🎨 Tags Générés

Tags automatiques selon le contenu :

- Matériaux : bois, racines, lierre, verre, vinyles
- Types : peinture, sculpture, composition, mobilier
- Couleurs : couleurs chaudes, couleurs froides
- Généraux : artisanat, fait main, unique

## 📊 Résultat

Actuellement **10 créations** :

- 8 sculptures
- 2 peintures

## 🖼️ Affichage

La page `/gallery` utilise ces données pour :

- Afficher toutes les créations avec images
- Filtrer par catégorie
- Rechercher par titre, description ou tags
- Afficher les métadonnées (matériaux, dimensions, année)
- Marquer les créations featured

## 🔧 Ajouter une Création

1. Ajouter l'image dans `public/images/`
2. Ajouter une ligne dans `carineland.csv` :
   ```csv
   20231201_120000.jpg,Description de la création,nouveau-nom.webp
   ```
3. Lancer le script :
   ```bash
   npm run process-creations
   ```
4. Les données seront automatiquement mises à jour

## 🎯 Optimisations Futures

- [ ] Conversion automatique en WebP avec Sharp
- [ ] Génération de thumbnails optimisés
- [ ] Extraction EXIF des images
- [ ] Lazy loading des images
- [ ] Pagination de la galerie
- [ ] Modal de détail pour chaque création
- [ ] Gestion admin pour CRUD des créations

## 📝 Structure JSON

```json
{
  "id": "creation-1",
  "title": "Table/tabouret en bois flotté/racines",
  "slug": "tabletabouret-en-bois-flotteracines",
  "description": "Table/tabouret en bois flotté/racines",
  "category": "sculpture",
  "imageUrl": "/creations/20231024_211212.jpg",
  "imageAlt": "Table/tabouret en bois flotté/racines",
  "year": 2023,
  "materials": ["bois flotté", "racines"],
  "dimensions": "Grande pièce (> 50cm)",
  "available": true,
  "featured": true,
  "tags": ["bois", "racines", "mobilier", "fonctionnel", "artisanat", "fait main", "unique"],
  "createdAt": "2025-11-02T02:48:15.145Z",
  "updatedAt": "2025-11-02T02:48:15.145Z"
}
```

---

**Développé avec ❤️ par @ujju16**
