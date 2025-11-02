import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
  },
}))

describe('Home Page', () => {
  it('renders hero section', () => {
    render(<Home />)
    expect(screen.getByText('Carineland')).toBeInTheDocument()
    expect(screen.getByText('Le Monde de Carine')).toBeInTheDocument()
  })

  it('renders features section', () => {
    render(<Home />)
    expect(screen.getByText('Pourquoi Choisir Carineland')).toBeInTheDocument()
    expect(screen.getByText('Nature Authentique')).toBeInTheDocument()
  })
})
