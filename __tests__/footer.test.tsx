import Footer from '../app/components/Footer'

describe('Footer Component', () => {
  it('should be defined', () => {
    expect(Footer).toBeDefined()
  })

  it('should export a function', () => {
    expect(typeof Footer).toBe('function')
  })
})
