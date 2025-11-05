import AdminLoginPage from '@/app/admin/login/page'

describe('AdminLoginPage', () => {
  it('should be defined', () => {
    expect(AdminLoginPage).toBeDefined()
  })

  it('should export a client component function', () => {
    expect(typeof AdminLoginPage).toBe('function')
  })
})
