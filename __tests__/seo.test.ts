import { generateMetadata, generateCreationMetadata } from '../app/lib/seo'

describe('SEO Utils', () => {
  describe('generateMetadata', () => {
    it('generates default metadata', () => {
      const metadata = generateMetadata()
      
      expect(metadata.title).toBe('Carineland - Créations Artisanales Naturelles')
      expect(metadata.description).toContain('artisanales')
      expect(metadata.openGraph).toBeDefined()
      expect(metadata.twitter).toBeDefined()
    })

    it('generates custom metadata', () => {
      const metadata = generateMetadata({
        title: 'Custom Title',
        description: 'Custom Description',
      })
      
      expect(metadata.title).toBe('Custom Title')
      expect(metadata.description).toBe('Custom Description')
    })

    it('includes Open Graph data', () => {
      const metadata = generateMetadata()
      
      expect(metadata.openGraph?.siteName).toBe('Carineland')
      expect(metadata.openGraph?.locale).toBe('fr_FR')
      expect(metadata.openGraph?.type).toBe('website')
    })
  })

  describe('generateCreationMetadata', () => {
    it('generates product metadata for creations', () => {
      const creation = {
        id: '1',
        title: 'Test Creation',
        description: 'Test Description',
        imageUrl: '/test.jpg',
        category: 'couronne',
        createdAt: '2025-01-01',
        updatedAt: '2025-01-02',
      }

      const metadata = generateCreationMetadata(creation)
      
      expect(metadata.title).toBe('Test Creation - Carineland')
      expect(metadata.openGraph?.type).toBe('product')
      expect(metadata.openGraph?.url).toContain('/gallery/1')
    })
  })
})
