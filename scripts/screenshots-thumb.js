const fs = require('fs-extra');
const path = require('path');
const sharp = require('sharp');
const screenshotsDir = path.resolve(__dirname, '../screenshots');

const start = async () => {
  const [compareDir, thumbDir] = ['compare', 'thumb'].map(dir => path.resolve(screenshotsDir, dir));
  const fileNames = await fs.readdir(compareDir);

  for (fileName of fileNames) {
    console.log(`attempting to create ${fileName} thumbnail`);
    const [filePath, thumbPath] = [compareDir, thumbDir].map(dir => path.resolve(dir, fileName));
    const fileData = await fs.readFile(filePath);
    const imageRaw = await sharp(fileData);
    const { width, height } = await imageRaw.metadata();

    // We want a maximum ratio of 1 : 2 (width : height) if possible, but if there
    // is not enough height to accommodate this when we extract as much as possible.
    const heightExtracted = Math.min(width * 2, height);
    const extractParams = { left: 0, top: 0, width, height: heightExtracted };
    const imageExtracted = await imageRaw.extract(extractParams);
    const imageResized = await imageExtracted.resize(100, null); // null = height: auto

    await imageResized.toFile(thumbPath);
  }
};

try {
  start().then(() => {
    console.log('screenshot thumbnails complete');
    process.exit(0);
  });
} catch (error) {
  console.log('screenshot thumbnails error');
  console.log(error);
  process.exit(1);
}
