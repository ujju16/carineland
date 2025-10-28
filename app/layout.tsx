import type { Metadata } from 'next'
import { Montserrat, Lora } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Carineland - Créations Artisanales',
  description: 'Le Monde de Carine, créations artisanales à base de lierre et autres éléments de la nature.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} ${lora.variable}`}>
        {children}
      </body>
    </html>
  )
}
