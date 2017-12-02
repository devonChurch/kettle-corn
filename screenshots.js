// require('babel-polyfill');

const isProduction = process.env.NODE_ENV === 'production';
const path = require('path');
const fs = require('fs-extra');
const puppeteer = require('puppeteer');
const puppeteerOptions = isProduction
  ? { args: ['--no-sandbox', '--disable-setuid-sandbox'] }
  : { headless: false, slowMo: 50 };
const screenshots = path.resolve(__dirname, './screenshots');

console.log({ isProduction });

// We are running the screenshot generation functionality in a completely linear
// sequence using "for of" rather than "forEach" itterations. This is due to
// Puppeteer throwing an error as the sequence grew.
//
// ERROR:
// (node:7498) UnhandledPromiseRejectionWarning: Unhandled promise rejection
// (rejection id: 1): Error: Page crashed!
const start = async () => {
  for (test of ['', 'services', 'contact', 'styleguide']) {
    const name = test || 'home';

    console.log('- - - - - - - - - - - - - - - - - - -');
    console.log(`${name} | start \n`);

    const browser = await puppeteer.launch(puppeteerOptions);
    const page = await browser.newPage();
    await fs.ensureDir(screenshots);
    await page.goto(`https://enhancedigital.co.nz/${test}`, { waitUntil: 'load' });

    for (width of [320, 600, 900, 1200]) {
      console.log(`- ${name} | ${width}px`);
      await page.setViewport({ width, height: 600 });
      const saveAs = path.resolve(screenshots, `${name}-${width}.png`);
      const screenshot = await page.screenshot({ fullPage: true, path: saveAs });
    }

    await page.close();
    await browser.close();
    console.log(`\n${name} | finish`);
  }
  console.log('- - - - - - - - - - - - - - - - - - -');
};

try {
  start();
} catch (error) {
  console.log(error);
  process.exit(1);
}

process.exit(0);
