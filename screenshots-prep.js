const fs = require('fs-extra');
const path = require('path');

const start = async () => {
  for (folder of ['new', 'old', 'compare']) {
    console.log(`attempting to create directory /${folder}`);
    const dir = path.resolve(__dirname, 'screenshots', folder);

    await fs.ensureDir(dir);
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
