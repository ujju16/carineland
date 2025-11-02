import type { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '../lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'À Propos - Carineland',
  description:
    "Découvrez l'histoire de Carineland, notre passion pour l'artisanat naturel et notre engagement écologique. Des créations uniques inspirées par la nature.",
  keywords: [
    'à propos',
    'histoire',
    'artisan',
    'passion nature',
    'écologique',
    'développement durable',
    'artisanat responsable',
  ],
  url: 'https://carineland.com/about',
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
