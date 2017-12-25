const fs = require('fs-extra');
const path = require('path');
const compareImages = require('resemblejs/compareImages');

const misMatchThreshold = 0;
const screenshotsDir = path.resolve(__dirname, '../screenshots');
const manifestDir = path.resolve(__dirname, '../screenshots', 'manifest.json');
const getFileNames = folder => {
  const dir = path.resolve(screenshotsDir, folder);
  const filePaths = fs.readdirSync(dir);

  return filePaths;
};

const oldFileNames = getFileNames('old');
const newFileNames = getFileNames('new');
const manifest = [];

const start = async () => {
  fs.ensureFile(manifestDir);

  for (fileName of newFileNames) {
    if (!oldFileNames.includes(fileName)) {
      console.log(`there was no old filename (${fileName}) to compare`);
      continue;
    }

    console.log('- - - - - - - - - - - - - - - - - - -');
    console.log(`${fileName} | start`);

    const getFilePath = folder => path.resolve(screenshotsDir, folder, fileName);
    const oldFilePath = getFilePath('old');
    const newFilePath = getFilePath('new');
    const compareFilePath = getFilePath('compare');
    const compareData = await compareImages(
      fs.readFileSync(oldFilePath),
      fs.readFileSync(newFilePath),
    );
    const { rawMisMatchPercentage, getBuffer } = compareData;
    const isMisMatch = rawMisMatchPercentage > misMatchThreshold;

    fs.writeFileSync(compareFilePath, getBuffer());
    manifest.push({ fileName, isMisMatch });
    console.log(`${fileName} | finish`);
  }

  console.log({ manifest });
  fs.writeFileSync(manifestDir, JSON.stringify(manifest));
};

try {
  start().then(() => {
    console.log('- - - - - - - - - - - - - - - - - - -');
    console.log('comparing complete');
    process.exit(0);
  });
} catch (e) {
  console.log('- - - - - - - - - - - - - - - - - - -');
  console.log('comparing error');
  console.log(error);
  process.exit(1);
}
