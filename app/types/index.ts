export interface Creation {
  id: string
  title: string
  slug: string
  description: string
  imageUrl: string
  imageAlt: string
  category: string
  year: number
  materials: string[]
  dimensions: string
  price?: number
  available: boolean
  featured: boolean
  tags: string[]
  createdAt: string
  updatedAt: string
}

export interface AdminUser {
  id: string
  email: string
  role: 'admin' | 'editor'
}

export interface GalleryFilter {
  category?: string
  featured?: boolean
  searchTerm?: string
}
