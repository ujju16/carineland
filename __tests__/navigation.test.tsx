import { render, screen } from '@testing-library/react'
import Navigation from '../app/components/Navigation'

jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

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
