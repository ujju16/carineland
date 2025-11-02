import { render, screen } from './test-utils'
import Home from '@/app/page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { name: /Carineland/i, level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Home />)
    const subtitle = screen.getByText(/Le Monde de Carine/i)
    expect(subtitle).toBeInTheDocument()
  })

  it('renders the about section', () => {
    render(<Home />)
    const aboutHeading = screen.getByRole('heading', { name: /À Propos/i })
    expect(aboutHeading).toBeInTheDocument()
  })

  it('renders all three creation cards', () => {
    render(<Home />)
    expect(screen.getByText(/Couronnes/i)).toBeInTheDocument()
    expect(screen.getByText(/Compositions/i)).toBeInTheDocument()
    expect(screen.getByText(/Décorations/i)).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<Home />)
    const footer = screen.getByText(/2025 Carineland/i)
    expect(footer).toBeInTheDocument()
  })
})
