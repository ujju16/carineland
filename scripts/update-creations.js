const fs = require('fs')
const path = require('path')

const CSV_FILE = path.join(__dirname, '..', 'carineland.csv')
const OUTPUT_FILE = path.join(__dirname, '..', 'app', 'data', 'creations.json')

function categorizeCreation(description) {
  const descLower = description.toLowerCase()
  
  if (descLower.includes('peinture')) return 'peinture'
  if (descLower.includes('racines') || descLower.includes('bois')) return 'sculpture'
  if (descLower.includes('composition') || descLower.includes('vinyles')) return 'composition'
  if (descLower.includes('insecte')) return 'sculpture'
  if (descLower.includes('table') || descLower.includes('tabouret')) return 'mobilier'
  
  return 'autre'
}

function generateSlug(description) {
  return description
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .substring(0, 60)
}

function extractMaterials(description) {
  const materials = []
  const descLower = description.toLowerCase()

  if (descLower.includes('bois')) materials.push('bois flotté')
  if (descLower.includes('racines')) materials.push('racines')
  if (descLower.includes('lierre')) materials.push('lierre')
  if (descLower.includes('peinture')) materials.push('peinture acrylique')
  if (descLower.includes('vinyles')) materials.push('vinyles')
  if (descLower.includes('verre')) materials.push('verre')
  if (descLower.includes('contreplaqué') || descLower.includes('contreplaque')) materials.push('contreplaqué')

  return materials.length > 0 ? materials : ['matériaux naturels']
}

function extractDimensions(description) {
  const descLower = description.toLowerCase()
  if (descLower.includes('table') || descLower.includes('grande')) {
    return 'Grande pièce (> 50cm)'
  }
  if (descLower.includes('peinture')) {
    return 'Format standard (40x50 cm)'
  }
  
  return 'Variable'
}

function generateTags(description) {
  const tags = []
  const descLower = description.toLowerCase()

  if (descLower.includes('bois')) tags.push('bois')
  if (descLower.includes('racines')) tags.push('racines')
  if (descLower.includes('lierre')) tags.push('lierre')
  if (descLower.includes('peinture')) tags.push('peinture', 'art abstrait')
  if (descLower.includes('sculpture')) tags.push('sculpture')
  if (descLower.includes('composition')) tags.push('composition')
  if (descLower.includes('table')) tags.push('mobilier', 'fonctionnel')
  if (descLower.includes('décorative') || descLower.includes('decorative')) tags.push('décoration')
  if (descLower.includes('orange') || descLower.includes('jaune')) tags.push('couleurs chaudes')
  if (descLower.includes('bleu') || descLower.includes('vert')) tags.push('couleurs froides')
  
  tags.push('artisanat', 'fait main', 'unique')
  
  return [...new Set(tags)]
}

function processCreations() {
  console.log('🎨 Processing Carineland Creations...\n')

  const csvContent = fs.readFileSync(CSV_FILE, 'utf-8')
  const lines = csvContent.split('\n').filter(line => line.trim())
  
  const creations = []

  for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].split(',')
    if (parts.length < 3) continue

    const originalFile = parts[0]
    const description = parts[1]

    const yearMatch = originalFile.match(/^(\d{4})/)
    const year = yearMatch ? parseInt(yearMatch[1]) : new Date().getFullYear()

    const category = categorizeCreation(description)
    const slug = generateSlug(description)

    const creation = {
      id: `creation-${i}`,
      title: description.split('(')[0].trim(),
      slug: slug,
      description: description,
      category: category,
      imageUrl: `/creations/${originalFile}`,
      imageAlt: description,
      year: year,
      materials: extractMaterials(description),
      dimensions: extractDimensions(description),
      available: true,
      featured: i <= 3,
      tags: generateTags(description),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    creations.push(creation)
    console.log(`✓ ${category.toUpperCase()}: ${description}`)
  }

  creations.sort((a, b) => b.year - a.year)

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(creations, null, 2))

  console.log(`\n✅ Success! Created ${creations.length} creations`)
  console.log(`📄 Data: ${OUTPUT_FILE}`)
  
  const stats = {}
  creations.forEach(c => {
    stats[c.category] = (stats[c.category] || 0) + 1
  })
  console.log('\n📊 Categories:')
  Object.entries(stats).forEach(([cat, count]) => {
    console.log(`   - ${cat}: ${count}`)
  })
}

processCreations()
