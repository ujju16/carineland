import Home from '@/app/page'

describe('Home Page', () => {
  it('should be defined', () => {
    expect(Home).toBeDefined()
  })

  it('should export a function', () => {
    expect(typeof Home).toBe('function')
  })
})
