export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

export const defaultSEO: SEOConfig = {
  title: 'Carineland - Créations Artisanales Naturelles',
  description:
    'Découvrez les créations artisanales uniques de Carine : couronnes de lierre, compositions florales et décorations naturelles faites main.',
  keywords: [
    'artisanat',
    'nature',
    'lierre',
    'créations artisanales',
    'fait main',
    'décoration naturelle',
    'couronne de lierre',
    'composition florale',
    'artisan français',
    'décoration écologique',
  ],
  image: '/og-image.jpg',
  url: 'https://carineland.com',
  type: 'website',
  author: 'Carine',
}

export function generateMetadata(config: Partial<SEOConfig> = {}) {
  const seo = { ...defaultSEO, ...config }

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords?.join(', '),
    authors: [{ name: seo.author || 'Carine' }],
    creator: seo.author || 'Carine',
    publisher: 'Carineland',
    openGraph: {
      type: seo.type,
      locale: 'fr_FR',
      url: seo.url,
      siteName: 'Carineland',
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: seo.image || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: seo.title,
          type: 'image/jpeg',
        },
      ],
      ...(seo.publishedTime && { publishedTime: seo.publishedTime }),
      ...(seo.modifiedTime && { modifiedTime: seo.modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [seo.image || '/og-image.jpg'],
      creator: '@carineland',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'verification_token',
      yandex: 'verification_token',
    },
    alternates: {
      canonical: seo.url,
      languages: {
        'fr-FR': seo.url || 'https://carineland.com',
      },
    },
  }
}

export function generateCreationMetadata(creation: {
  id: string
  title: string
  description: string
  imageUrl: string
  category: string
  createdAt: string
  updatedAt: string
}) {
  return generateMetadata({
    title: `${creation.title} - Carineland`,
    description: creation.description,
    image: creation.imageUrl,
    url: `https://carineland.com/gallery/${creation.id}`,
    type: 'product',
    publishedTime: creation.createdAt,
    modifiedTime: creation.updatedAt,
    keywords: [
      'artisanat',
      'nature',
      creation.category,
      'fait main',
      'création unique',
      'décoration naturelle',
    ],
  })
}
