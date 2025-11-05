import AdminPage from '@/app/admin/page'

describe('AdminPage', () => {
  it('should be defined', () => {
    expect(AdminPage).toBeDefined()
  })

  it('should export a client component function', () => {
    expect(typeof AdminPage).toBe('function')
  })
})
