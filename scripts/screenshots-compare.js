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
    const hasOldFile = oldFileNames.includes(fileName);

    if (!hasOldFile) {
      console.log(`there was no old filename (${fileName}) to compare`);
      manifest.push({ fileName, status: 'noOld' });
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
    const status = rawMisMatchPercentage > misMatchThreshold ? 'noMatch' : 'match';

    fs.writeFileSync(compareFilePath, getBuffer());
    manifest.push({ fileName, status });
    console.log(`${fileName} | finish`);
  }

  for (fileName of oldFileNames) {
    const hasNewFile = newFileNames.includes(fileName);

    if (!hasNewFile) {
      console.log(`there was no new filename (${fileName}) to compare`);
      manifest.push({ fileName, status: 'noNew' });
    }
  }

  console.log(JSON.stringify(manifest, null, 2));
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

// [
//   {
//     filename: 'home-320.png',
//     status: '' // noMatch, match, noOld, noNew
//   }
// ]
