import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Administration - Carineland',
  description: 'Panel dadministration pour gérer les créations',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children
}
