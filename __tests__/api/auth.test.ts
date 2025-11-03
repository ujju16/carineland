import { GET, POST, authOptions } from '@/app/api/auth/[...nextauth]/route'

describe('Auth API', () => {
  it('exports GET handler', () => {
    expect(GET).toBeDefined()
    expect(typeof GET).toBe('function')
  })

  it('exports POST handler', () => {
    expect(POST).toBeDefined()
    expect(typeof POST).toBe('function')
  })

  describe('Authentication flow', () => {
    beforeEach(() => {
      process.env.ADMIN_USERNAME = 'testadmin'
      process.env.ADMIN_PASSWORD = 'testpass'
      process.env.NEXTAUTH_SECRET = 'test-secret'
    })

    it('has correct session configuration', () => {
      expect(authOptions.session?.strategy).toBe('jwt')
      expect(authOptions.session?.maxAge).toBe(30 * 24 * 60 * 60)
    })

    it('has correct pages configuration', () => {
      expect(authOptions.pages?.signIn).toBe('/admin/login')
      expect(authOptions.pages?.error).toBe('/admin/login')
    })

    it('has credentials provider configured', () => {
      expect(authOptions.providers).toHaveLength(1)
      expect(authOptions.providers[0].name).toBe('Credentials')
    })
  })
})
