import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import MUIRegistry from './lib/MUIRegistry'
import Navigation from './components/Navigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carineland - Créations Artisanales',
  description:
    'Le Monde de Carine, créations artisanales à base de lierre et autres éléments de la nature.',
  keywords: ['artisanat', 'nature', 'lierre', 'créations', 'fait main'],
  authors: [{ name: 'Carine', url: 'https://carineland.com' }],
  creator: 'Carine',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://carineland.com',
    siteName: 'Carineland',
    title: 'Carineland - Créations Artisanales',
    description: 'Créations artisanales à base de lierre et autres éléments de la nature',
  },
  metadataBase: new URL('https://carineland.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <AppRouterCacheProvider>
          <MUIRegistry>
            <Navigation />
            {children}
          </MUIRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
