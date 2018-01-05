const isProduction = process.env.NODE_ENV === 'production';
const fs = require('fs-extra');
const path = require('path');
const screenshotsDir = path.resolve(__dirname, '../screenshots');

const start = async () => {
  const [oldDir, newDir, compareDir, thumbDir] = ['old', 'new', 'compare', 'thumb'].map(dir =>
    path.resolve(screenshotsDir, dir),
  );

  if (isProduction) {
    for (dir of [oldDir, newDir, compareDir, thumbDir]) {
      console.log(`attempting to create directory /${dir}`);
      await fs.ensureDir(dir);
    }
  } else {
    console.log('change previously new screenshots to become current old screenshots');
    await fs.copy(newDir, oldDir);

    for (dir of [newDir, compareDir, thumbDir]) {
      console.log(`attempting to empty directory /${dir}`);
      await fs.emptyDir(dir);
    }
  }
};

try {
  start().then(() => {
    console.log('screenshot prep complete');
    process.exit(0);
  });
} catch (error) {
  console.log('screenshot prep error');
  console.log(error);
  process.exit(1);
}
