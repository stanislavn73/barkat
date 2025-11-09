const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function getImageDimensions(imagePath) {
    try {
        const metadata = await sharp(imagePath).metadata();
        return {
            width: metadata.width,
            height: metadata.height,
            format: metadata.format,
            size: fs.statSync(imagePath).size
        };
    } catch (error) {
        console.error(`Error processing ${imagePath}:`, error.message);
        return null;
    }
}

function getAllImages(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            getAllImages(filePath, fileList);
        } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

async function analyzeAllImages() {
    const publicDir = path.join(__dirname, '../public/images');
    const images = getAllImages(publicDir);

    console.log('Analyzing images...\n');

    const results = {};

    for (const imagePath of images) {
        const dimensions = await getImageDimensions(imagePath);
        if (dimensions) {
            const relativePath = imagePath.replace(path.join(__dirname, '../public'), '');
            results[relativePath] = dimensions;
        }
    }

    // Write results to JSON file
    fs.writeFileSync(
        path.join(__dirname, 'image-dimensions.json'),
        JSON.stringify(results, null, 2)
    );

    console.log('Analysis complete! Results saved to scripts/image-dimensions.json');
    console.log(`Total images analyzed: ${Object.keys(results).length}`);
}

analyzeAllImages();
