import { render, screen } from './test-utils'
import Footer from '../app/components/Footer'

// eslint-disable-next-line react/display-name
jest.mock('next/link', () => ({ children, href }: { children: React.ReactNode; href: string }) => (
  <a href={href}>{children}</a>
))

describe('Footer Component', () => {
  it('renders footer sections', () => {
    render(<Footer />)
    
    expect(screen.getByText('Carineland')).toBeInTheDocument()
    expect(screen.getByText('Navigation')).toBeInTheDocument()
    expect(screen.getByText('Informations Légales')).toBeInTheDocument()
  })

  it('contains legal links', () => {
    render(<Footer />)
    
    expect(screen.getByText('Mentions Légales')).toBeInTheDocument()
    expect(screen.getByText('Politique de Confidentialité')).toBeInTheDocument()
    expect(screen.getByText('Gestion des Cookies')).toBeInTheDocument()
    expect(screen.getByText('RGPD')).toBeInTheDocument()
  })

  it('displays copyright and developer credit', () => {
    render(<Footer />)
    
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${currentYear} Carineland`))).toBeInTheDocument()
    expect(screen.getByText('@ujju16')).toBeInTheDocument()
  })
})
