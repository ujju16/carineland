const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const { parse } = require('csv-parse/sync')

const PUBLIC_DIR = path.join(__dirname, '..', 'public')
const IMAGE_DIR = path.join(PUBLIC_DIR, 'image')
const CREATIONS_DIR = path.join(PUBLIC_DIR, 'creations')
const CSV_FILE = path.join(__dirname, '..', 'carineland.csv')
const OUTPUT_FILE = path.join(__dirname, '..', 'app', 'data', 'creations.json')

// Create creations directory if not exists
if (!fs.existsSync(CREATIONS_DIR)) {
  fs.mkdirSync(CREATIONS_DIR, { recursive: true })
}

// Create app/data directory if not exists
const dataDir = path.join(__dirname, '..', 'app', 'data')
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

async function convertImageToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
      .toFile(outputPath)
    
    console.log(`✓ Converted: ${path.basename(inputPath)} → ${path.basename(outputPath)}`)
    return true
  } catch (error) {
    console.error(`✗ Error converting ${path.basename(inputPath)}:`, error.message)
    return false
  }
}

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

async function processCreations() {
  console.log('🎨 Processing Carineland Creations...\n')

  // Read CSV file
  const csvContent = fs.readFileSync(CSV_FILE, 'utf-8')
  const records = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true
  })

  const creations = []
  let successCount = 0

  for (let i = 0; i < records.length; i++) {
    const record = records[i]
    const originalFile = record['Image Originale (Nom du fichier)']
    const description = record["Description de l'œuvre"] || record['Description de l\'œuvre']
    const newName = record['Nouveau Nom WebP']

    const inputPath = path.join(IMAGE_DIR, originalFile)
    const outputPath = path.join(CREATIONS_DIR, newName)

    // Check if original file exists
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠ File not found: ${originalFile}`)
      continue
    }

    // Convert to WebP
    const success = await convertImageToWebP(inputPath, outputPath)
    if (!success) continue

    successCount++

    // Create creation object
    const category = categorizeCreation(description)
    const slug = generateSlug(description)
    
    // Extract year from filename (format: YYYYMMDD_HHMMSS.jpg)
    const yearMatch = originalFile.match(/^(\d{4})/)
    const year = yearMatch ? parseInt(yearMatch[1]) : new Date().getFullYear()

    const creation = {
      id: `creation-${i + 1}`,
      title: description.split('(')[0].trim(),
      slug: slug,
      description: description,
      category: category,
      imageUrl: `/creations/${newName}`,
      imageAlt: description,
      year: year,
      materials: extractMaterials(description),
      dimensions: extractDimensions(description),
      available: true,
      featured: i < 3, // First 3 are featured
      tags: generateTags(description),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    creations.push(creation)
  }

  // Sort by year (most recent first)
  creations.sort((a, b) => b.year - a.year)

  // Write to JSON file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(creations, null, 2))

  console.log(`\n✅ Success! Processed ${successCount}/${records.length} creations`)
  console.log(`📁 Images saved to: ${CREATIONS_DIR}`)
  console.log(`📄 Data saved to: ${OUTPUT_FILE}`)
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
  if (descLower.includes('contreplaqué')) materials.push('contreplaqué')

  return materials.length > 0 ? materials : ['matériaux naturels']
}

function extractDimensions(description) {
  // Try to extract dimensions if mentioned
  const dimMatch = description.match(/(\d+)\s*x\s*(\d+)/)
  if (dimMatch) {
    return `${dimMatch[1]} x ${dimMatch[2]} cm`
  }
  
  // Estimate based on type
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

  // Material tags
  if (descLower.includes('bois')) tags.push('bois')
  if (descLower.includes('racines')) tags.push('racines')
  if (descLower.includes('lierre')) tags.push('lierre')
  
  // Type tags
  if (descLower.includes('peinture')) tags.push('peinture', 'art abstrait')
  if (descLower.includes('sculpture')) tags.push('sculpture')
  if (descLower.includes('composition')) tags.push('composition')
  if (descLower.includes('table')) tags.push('mobilier', 'fonctionnel')
  if (descLower.includes('décorative')) tags.push('décoration')
  
  // Color tags
  if (descLower.includes('orange') || descLower.includes('jaune')) tags.push('couleurs chaudes')
  if (descLower.includes('bleu') || descLower.includes('vert')) tags.push('couleurs froides')
  
  // General tags
  tags.push('artisanat', 'fait main', 'unique')
  
  return [...new Set(tags)] // Remove duplicates
}

// Run the script
processCreations().catch(console.error)
