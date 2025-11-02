export interface BreadcrumbItem {
  name: string
  url: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateProductSchema(creation: {
  id: string
  title: string
  description: string
  imageUrl: string
  category: string
  price?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: creation.title,
    description: creation.description,
    image: creation.imageUrl,
    category: creation.category,
    brand: {
      '@type': 'Brand',
      name: 'Carineland',
    },
    ...(creation.price && {
      offers: {
        '@type': 'Offer',
        price: creation.price,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      },
    }),
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Carineland',
    url: 'https://carineland.com',
    description: 'Créations artisanales à base de lierre et autres éléments de la nature',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://carineland.com/gallery?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  author: string
  publishedDate: string
  modifiedDate?: string
  imageUrl?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Carineland',
      logo: {
        '@type': 'ImageObject',
        url: 'https://carineland.com/logo.png',
      },
    },
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    ...(article.imageUrl && {
      image: article.imageUrl,
    }),
  }
}
