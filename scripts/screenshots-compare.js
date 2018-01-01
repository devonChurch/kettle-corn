const fs = require('fs-extra');
const path = require('path');
const compareImages = require('resemblejs/compareImages');
const screenshotsDir = path.resolve(__dirname, '../screenshots');
const manifestDir = path.resolve(__dirname, '../screenshots', 'manifest.json');

const getFileNames = async folder => {
  const dir = path.resolve(screenshotsDir, folder);
  const fileNames = await fs.readdir(dir);
  const screenshotFiles = fileNames.filter(fileName => fileName.endsWith('.png'));

  return screenshotFiles;
};

const createMergeFileNames = (oldFileNames, newFileNames) => {
  const convertIntoObject = fileNames =>
    fileNames.reduce((acc, fileName) => ({ ...acc, [fileName]: 0 }), {});
  const uniqueObject = { ...convertIntoObject(oldFileNames), ...convertIntoObject(newFileNames) };
  const uniqueKeys = Object.keys(uniqueObject);

  return uniqueKeys;
};

const createGenericManifestData = fileName => {
  const [width, ...sectionSnippets] = fileName
    .replace('.png', '')
    .split('-')
    .reverse();
  const section = sectionSnippets.reverse().join('-');

  return { fileName, width, section };
};

const createComparisonRawData = async fileName => {
  const getFilePath = folder => path.resolve(screenshotsDir, folder, fileName);
  const [oldFilePath, newFilePath, compareFilePath] = [
    getFilePath('old'),
    getFilePath('new'),
    getFilePath('compare'),
  ];
  const [oldFileData, newFileData] = [
    await fs.readFile(oldFilePath),
    await fs.readFile(newFilePath),
  ];
  const comparisonData = await compareImages(oldFileData, newFileData);

  return { ...comparisonData, compareFilePath };
};

const createComparisonManifestData = ({ rawMisMatchPercentage }) => {
  const threshold = 0;
  const isMisMatch = rawMisMatchPercentage > threshold;

  return {
    percentage: Math.round(rawMisMatchPercentage),
    status: isMisMatch ? 'noMatch' : 'match',
  };
};

const createComparisonImage = ({ getBuffer, compareFilePath }) => {
  return fs.writeFile(compareFilePath, getBuffer());
};

const createManifestEntry = (oldFileNames, newFileNames) => async fileName => {
  const isInOldSet = oldFileNames.includes(fileName);
  const isInNewSet = newFileNames.includes(fileName);
  const genericManifestData = createGenericManifestData(fileName);

  switch (true) {
    case isInOldSet && !isInNewSet:
      return {
        ...genericManifestData,
        status: 'noNew',
      };

    case !isInOldSet && isInNewSet:
      return {
        ...genericManifestData,
        status: 'noOld',
      };

    default: {
      const comparisonRawData = await createComparisonRawData(fileName);
      const comparisonManifestData = createComparisonManifestData(comparisonRawData);
      await createComparisonImage(comparisonRawData);

      return {
        ...genericManifestData,
        ...comparisonManifestData,
      };
    }
  }
};

const start = async () => {
  fs.ensureFile(manifestDir);

  const oldFileNames = await getFileNames('old');
  const newFileNames = await getFileNames('new');
  const mergedFileNames = createMergeFileNames(oldFileNames, newFileNames);
  const manifestThunk = createManifestEntry(oldFileNames, newFileNames);
  const manifest = await Promise.all(
    mergedFileNames.map(async fileName => await manifestThunk(fileName)),
  );

  console.log(JSON.stringify(manifest, null, 2));
  await fs.writeFile(manifestDir, JSON.stringify(manifest));
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
//     section: 'home',
//     width: 320,
//     percentage: 23.5,
//     status: '' // noMatch, match, noOld, noNew
//   }
// ]
