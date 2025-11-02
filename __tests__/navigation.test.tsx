import { render, screen } from './test-utils'
import Navigation from '../app/components/Navigation'

// eslint-disable-next-line react/display-name
jest.mock('next/link', () => ({ children, href }: { children: React.ReactNode; href: string }) => (
  <a href={href}>{children}</a>
))

describe('Navigation Component', () => {
  it('renders navigation links', () => {
    render(<Navigation />)

    expect(screen.getByText('Carineland')).toBeInTheDocument()
    expect(screen.getByText('Accueil')).toBeInTheDocument()
    expect(screen.getByText('Galerie')).toBeInTheDocument()
    expect(screen.getByText('À Propos')).toBeInTheDocument()
  })

  it('has correct navigation structure', () => {
    render(<Navigation />)

    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })
})
