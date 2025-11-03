import { render, screen, waitFor } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import AdminPage from '@/app/admin/page'

jest.mock('next-auth/react')
jest.mock('next/navigation')

describe('AdminPage', () => {
  const mockPush = jest.fn()
  const mockUseSession = useSession as jest.MockedFunction<typeof useSession>

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
      refresh: jest.fn(),
    })
  })

  it('shows loading state when session is loading', () => {
    mockUseSession.mockReturnValue({
      data: null,
      status: 'loading',
      update: jest.fn(),
    })

    render(<AdminPage />)

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('redirects to login when not authenticated', async () => {
    mockUseSession.mockReturnValue({
      data: null,
      status: 'unauthenticated',
      update: jest.fn(),
    })

    render(<AdminPage />)

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/admin/login')
    })
  })

  it('renders admin page when authenticated', () => {
    mockUseSession.mockReturnValue({
      data: {
        user: { id: '1', name: 'Admin', email: 'admin@carineland.fr' },
        expires: '2099-12-31',
      },
      status: 'authenticated',
      update: jest.fn(),
    })

    render(<AdminPage />)

    expect(screen.getByRole('heading', { name: /administration/i })).toBeInTheDocument()
    expect(screen.getByText(/connecté en tant que admin/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /nouvelle création/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /déconnexion/i })).toBeInTheDocument()
  })

  it('displays empty state when no creations', () => {
    mockUseSession.mockReturnValue({
      data: {
        user: { id: '1', name: 'Admin', email: 'admin@carineland.fr' },
        expires: '2099-12-31',
      },
      status: 'authenticated',
      update: jest.fn(),
    })

    render(<AdminPage />)

    expect(screen.getByText(/aucune création pour le moment/i)).toBeInTheDocument()
    expect(
      screen.getByText(/commencez par ajouter votre première création/i)
    ).toBeInTheDocument()
  })

  it('has proper ARIA attributes for accessibility', () => {
    mockUseSession.mockReturnValue({
      data: {
        user: { id: '1', name: 'Admin', email: 'admin@carineland.fr' },
        expires: '2099-12-31',
      },
      status: 'authenticated',
      update: jest.fn(),
    })

    render(<AdminPage />)

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const addButton = screen.getByRole('button', { name: /ajouter une nouvelle création/i })
    expect(addButton).toHaveAttribute('aria-label')
  })
})
