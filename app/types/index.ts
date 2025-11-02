export interface Creation {
  id: string
  title: string
  description: string
  imageUrl: string
  category: 'couronne' | 'composition' | 'decoration'
  price?: number
  featured: boolean
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
