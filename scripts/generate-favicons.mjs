import sharp from 'sharp'
import { join } from 'path'

const logoPath = join(process.cwd(), 'public/static/images/logo.png')
const faviconsDir = join(process.cwd(), 'public/static/favicons')

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 76 },
  { name: 'android-chrome-96x96.png', size: 96 },
  { name: 'mstile-150x150.png', size: 150 },
]

async function generateFavicons() {
  try {
    const image = sharp(logoPath)

    // Generate all PNG favicons
    for (const { name, size } of sizes) {
      await image
        .clone()
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toFile(join(faviconsDir, name))
      console.log(`✓ Generated ${name}`)
    }

    // Generate favicon.ico (using 32x32 version)
    // Note: This creates a PNG file named .ico, which works for most browsers
    // For a proper multi-resolution ICO file, consider using 'to-ico' package
    await image
      .clone()
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toFile(join(faviconsDir, 'favicon.ico'))

    console.log('✓ Generated favicon.ico')
    console.log('\n✅ All favicons generated successfully!')
  } catch (error) {
    console.error('❌ Error generating favicons:', error.message)
    process.exit(1)
  }
}

generateFavicons()
