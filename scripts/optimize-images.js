#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/images');
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1920;
const QUALITY = 85;

async function optimizeImage(filePath) {
  try {
    const fileName = path.basename(filePath);
    const ext = path.extname(filePath).toLowerCase();
    
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
      console.log(`⏭️  Skipping ${fileName} (not a supported format)`);
      return;
    }

    const stats = await fs.stat(filePath);
    const originalSize = stats.size;

    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    console.log(`🔄 Processing ${fileName} (${(originalSize / 1024 / 1024).toFixed(2)} MB, ${metadata.width}x${metadata.height})`);

    let pipeline = image;
    
    if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
      pipeline = pipeline.resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    const tempPath = filePath + '.tmp';
    
    if (ext === '.png') {
      await pipeline
        .png({ quality: QUALITY, compressionLevel: 9 })
        .toFile(tempPath);
    } else {
      await pipeline
        .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
        .toFile(tempPath);
    }

    const newStats = await fs.stat(tempPath);
    const newSize = newStats.size;
    const savedPercent = ((1 - newSize / originalSize) * 100).toFixed(1);

    if (newSize < originalSize) {
      await fs.rename(tempPath, filePath);
      console.log(`✅ ${fileName}: ${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(newSize / 1024 / 1024).toFixed(2)} MB (saved ${savedPercent}%)`);
    } else {
      await fs.unlink(tempPath);
      console.log(`⏭️  ${fileName}: Already optimized`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

async function optimizeAllImages() {
  try {
    console.log(`📂 Optimizing images in ${IMAGES_DIR}\n`);
    
    const files = await fs.readdir(IMAGES_DIR);
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png'].includes(ext);
    });

    console.log(`Found ${imageFiles.length} images to process\n`);

    for (const file of imageFiles) {
      await optimizeImage(path.join(IMAGES_DIR, file));
    }

    console.log('\n✨ Image optimization complete!');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

optimizeAllImages();
