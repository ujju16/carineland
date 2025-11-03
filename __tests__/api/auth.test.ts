import { GET, POST } from '@/app/api/auth/[...nextauth]/route'

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

    it('has handlers exported from auth config', () => {
      expect(GET).toBeDefined()
      expect(POST).toBeDefined()
    })
  })
})
