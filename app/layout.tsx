import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import MUIRegistry from './lib/MUIRegistry'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import SkipLink from './components/SkipLink'
import { generateMetadata as generateSEOMetadata } from './lib/seo'
import './globals.css'

export const metadata: Metadata = {
  ...generateSEOMetadata(),
  metadataBase: new URL('https://carineland.fr'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Carineland',
    url: 'https://carineland.fr',
    description: 'Créations artisanales à base de lierre et autres éléments de la nature',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://carineland.fr/gallery?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Carineland',
    url: 'https://carineland.fr',
    logo: 'https://carineland.fr/logo.png',
    description: 'Créations artisanales à base de lierre et autres éléments de la nature',
    founder: {
      '@type': 'Person',
      name: 'Carine',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
    },
  }

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <MUIRegistry>
            <SkipLink />
            <Navigation />
            <main id="main-content">{children}</main>
            <Footer />
          </MUIRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
