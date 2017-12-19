const fs = require('fs');
const path = require('path');
const compareImages = require('resemblejs/compareImages');

const screenshotsDir = path.resolve(__dirname, 'screenshots');
const getFileNames = folder => {
  const dir = path.resolve(screenshotsDir, folder);
  const filePaths = fs.readdirSync(dir);

  return filePaths;
};

const oldFileNames = getFileNames('old');
const newFileNames = getFileNames('new');

const start = async () => {
  for (fileName of newFileNames) {
    if (!oldFileNames.includes(fileName)) continue;

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

    fs.writeFileSync(compareFilePath, compareData.getBuffer());
    console.log(`${fileName} | finish`);
  }
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
