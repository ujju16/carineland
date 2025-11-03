import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import AdminLoginPage from '@/app/admin/login/page'

jest.mock('next-auth/react')
jest.mock('next/navigation')

describe('AdminLoginPage', () => {
  const mockPush = jest.fn()
  const mockRefresh = jest.fn()
  const mockSignIn = signIn as jest.MockedFunction<typeof signIn>

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
      refresh: mockRefresh,
    })
  })

  it('renders login form correctly', () => {
    render(<AdminLoginPage />)

    expect(screen.getByRole('heading', { name: /administration/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/nom d'utilisateur/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^mot de passe$/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /se connecter/i })).toBeInTheDocument()
  })

  it('disables submit button when fields are empty', () => {
    render(<AdminLoginPage />)

    const submitButton = screen.getByRole('button', { name: /se connecter/i })
    expect(submitButton).toBeDisabled()
  })

  it('enables submit button when fields are filled', () => {
    render(<AdminLoginPage />)

    const usernameInput = screen.getByLabelText(/nom d'utilisateur/i)
    const passwordInput = screen.getByLabelText(/^mot de passe$/i)

    fireEvent.change(usernameInput, { target: { value: 'admin' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })

    const submitButton = screen.getByRole('button', { name: /se connecter/i })
    expect(submitButton).not.toBeDisabled()
  })

  it('toggles password visibility', () => {
    render(<AdminLoginPage />)

    const passwordInput = screen.getByLabelText(/^mot de passe$/i)
    const toggleButton = screen.getByLabelText(/afficher le mot de passe/i)

    expect(passwordInput).toHaveAttribute('type', 'password')

    fireEvent.click(toggleButton)
    expect(passwordInput).toHaveAttribute('type', 'text')

    fireEvent.click(toggleButton)
    expect(passwordInput).toHaveAttribute('type', 'password')
  })

  it('handles successful login', async () => {
    mockSignIn.mockResolvedValueOnce({
      error: undefined,
      status: 200,
      ok: true,
      url: '/admin',
      code: undefined,
    })

    render(<AdminLoginPage />)

    const usernameInput = screen.getByLabelText(/nom d'utilisateur/i)
    const passwordInput = screen.getByLabelText(/^mot de passe$/i)
    const submitButton = screen.getByRole('button', { name: /se connecter/i })

    fireEvent.change(usernameInput, { target: { value: 'admin' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith('credentials', {
        username: 'admin',
        password: 'password123',
        redirect: false,
      })
    })

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/admin')
      expect(mockRefresh).toHaveBeenCalled()
    })
  })

  it('displays error message on failed login', async () => {
    mockSignIn.mockResolvedValueOnce({
      error: 'CredentialsSignin',
      status: 401,
      ok: false,
      url: null,
      code: 'credentials',
    })

    render(<AdminLoginPage />)

    const usernameInput = screen.getByLabelText(/nom d'utilisateur/i)
    const passwordInput = screen.getByLabelText(/^mot de passe$/i)
    const submitButton = screen.getByRole('button', { name: /se connecter/i })

    fireEvent.change(usernameInput, { target: { value: 'wrong' } })
    fireEvent.change(passwordInput, { target: { value: 'wrong' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/identifiants incorrects/i)).toBeInTheDocument()
    })
  })

  it('shows loading state during login', async () => {
    mockSignIn.mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                ok: true,
                error: undefined,
                status: 200,
                url: '/admin',
                code: undefined,
              }),
            100
          )
        )
    )

    render(<AdminLoginPage />)

    const usernameInput = screen.getByLabelText(/nom d'utilisateur/i)
    const passwordInput = screen.getByLabelText(/^mot de passe$/i)
    const submitButton = screen.getByRole('button', { name: /se connecter/i })

    fireEvent.change(usernameInput, { target: { value: 'admin' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /connexion en cours/i })).toBeInTheDocument()
    })
  })

  it('has proper ARIA attributes for accessibility', () => {
    render(<AdminLoginPage />)

    const form = screen.getByRole('form')
    expect(form).toHaveAttribute('aria-label', 'Formulaire de connexion administrateur')

    const usernameInput = screen.getByLabelText(/nom d'utilisateur/i)
    expect(usernameInput).toHaveAttribute('aria-required', 'true')

    const passwordInput = screen.getByLabelText(/^mot de passe$/i)
    expect(passwordInput).toHaveAttribute('aria-required', 'true')
  })
})
