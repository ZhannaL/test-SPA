const fs = require('fs');
const sharp = require('sharp');

async function convertPNGtoWebP(inputDir, outputDir) {
  try {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    const files = fs
      .readdirSync(inputDir)
      .filter((file) => file.endsWith('.png'));

    for (const file of files) {
      const inputPath = `${inputDir}/${file}`;
      const outputPath = `${outputDir}/${file.replace('.png', '.webp')}`;

      await sharp(inputPath)
        .png({ quality: 70, force: false, compressionLevel: 9 })
        .webp({ quality: 70, force: false, reductionEffort: 6 })
        .toFile(outputPath);

      console.log(`${inputPath} converted to WebP and saved to ${outputPath}`);
    }
  } catch (error) {
    console.error('Error converting PNG images to WebP:', error);
  }
}

const inputDirectory = './src/assetsOrigins';
const outputDirectory = './src/assets';
convertPNGtoWebP(inputDirectory, outputDirectory);
