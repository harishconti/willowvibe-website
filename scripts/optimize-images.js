const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '../public');
const OUTPUT_DATA_FILE = path.join(__dirname, '../public/image-data.json');

// Ensure image-data.json exists or create empty object
let imageData = {};

async function processImage(filePath) {
  const dir = path.dirname(filePath);
  const name = path.basename(filePath, path.extname(filePath));
  const ext = path.extname(filePath);

  // Skip if it's already a webp file we generated (simple check)
  if (ext === '.webp') return;

  const webpFileName = `${name}.webp`;
  const webpPath = path.join(dir, webpFileName);

  // Relative path from public root, e.g., "/images/hero.jpg"
  const relPath = '/' + path.relative(PUBLIC_DIR, filePath).replace(/\\/g, '/');
  const webpRelPath = '/' + path.relative(PUBLIC_DIR, webpPath).replace(/\\/g, '/');

  // console.log(`Processing: ${relPath}`);

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Convert to WebP
    if (!fs.existsSync(webpPath)) {
        await image
        .webp({ quality: 80 })
        .toFile(webpPath);
        console.log(`  -> Created WebP: ${webpFileName}`);
    }

    // Generate Blur Placeholder
    const buffer = await image
      .resize(10, 10, { fit: 'inside' })
      .toBuffer();
    const base64 = `data:image/${metadata.format};base64,${buffer.toString('base64')}`;

    imageData[relPath] = {
      src: webpRelPath,
      width: metadata.width,
      height: metadata.height,
      blurDataURL: base64,
    };

  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
  }
}

async function traverse(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            await traverse(filePath);
        } else {
             const ext = path.extname(file).toLowerCase();
              if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                  await processImage(filePath);
              }
        }
    }
}

async function main() {
  console.log('Starting image optimization...');

  // Load existing data if any, to preserve manual entries or avoid full re-process if we were smarter (but we just overwrite for now)
  // if (fs.existsSync(OUTPUT_DATA_FILE)) {
  //   imageData = JSON.parse(fs.readFileSync(OUTPUT_DATA_FILE, 'utf8'));
  // }

  await traverse(PUBLIC_DIR);

  fs.writeFileSync(OUTPUT_DATA_FILE, JSON.stringify(imageData, null, 2));
  console.log(`Image data saved to ${OUTPUT_DATA_FILE}`);
}

main();
