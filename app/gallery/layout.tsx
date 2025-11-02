import type { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '../lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Galerie - Carineland',
  description:
    'Découvrez toutes nos créations artisanales : couronnes de lierre naturel, compositions florales uniques et décorations écologiques faites main.',
  keywords: [
    'galerie',
    'créations artisanales',
    'couronnes lierre',
    'compositions florales',
    'décorations nature',
    'fait main',
    'artisanat français',
  ],
  url: 'https://carineland.com/gallery',
})

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children
}
