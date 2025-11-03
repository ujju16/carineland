import Navigation from '../app/components/Navigation'

describe('Navigation Component', () => {
  it('should be defined', () => {
    expect(Navigation).toBeDefined()
  })

  it('should export a function', () => {
    expect(typeof Navigation).toBe('function')
  })
})
