const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

async function generateFavicon() {
  const logoPath = path.join(__dirname, '../public/logo1.png')
  const publicDir = path.join(__dirname, '../public')

  // Lire l'image et la rendre transparente si elle a un fond blanc
  const image = sharp(logoPath)
  const metadata = await image.metadata()

  console.log('Génération des favicons à partir de logo1.png...')

  // Favicon 16x16 - Version plus contrastée avec bordure
  await sharp(logoPath)
    .resize(16, 16, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .sharpen()
    .toFile(path.join(publicDir, 'favicon-16x16.png'))

  console.log('✓ Généré favicon-16x16.png')

  // Favicon 32x32 - Version plus contrastée
  await sharp(logoPath)
    .resize(32, 32, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .sharpen()
    .toFile(path.join(publicDir, 'favicon-32x32.png'))

  console.log('✓ Généré favicon-32x32.png')

  // Apple Touch Icon 180x180
  await sharp(logoPath)
    .resize(180, 180, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .toFile(path.join(publicDir, 'apple-touch-icon.png'))

  console.log('✓ Généré apple-touch-icon.png')

  // Générer un favicon.ico à partir du 32x32
  // Note: sharp ne supporte pas directement .ico, on crée un PNG de haute qualité
  await sharp(logoPath)
    .resize(48, 48, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .sharpen()
    .png()
    .toFile(path.join(publicDir, 'favicon-48x48.png'))

  console.log('✓ Généré favicon-48x48.png')

  console.log('\nFavicons générés avec succès!')
  console.log('Note: Pour un vrai .ico, utiliser un outil en ligne ou ImageMagick')
}

generateFavicon().catch(console.error)
