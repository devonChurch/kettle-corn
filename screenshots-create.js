// require('babel-polyfill');

const isProduction = process.env.NODE_ENV === 'production';
const path = require('path');
const puppeteer = require('puppeteer');
const puppeteerUrl = isProduction ? 'https://enhancedigital.co.nz/' : 'http://localhost:8000/';
const puppeteerOptions = isProduction
  ? { args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'] }
  : { headless: false, slowMo: 50 };
const screenshots = path.resolve(__dirname, 'screenshots', 'new');

console.log({ isProduction });

// We are running the screenshot generation functionality in a completely linear
// sequence using "for of" rather than "forEach" itterations. This is due to
// Puppeteer throwing an error as the sequence grew.
//
// ERROR:
// (node:7498) UnhandledPromiseRejectionWarning: Unhandled promise rejection
// (rejection id: 1): Error: Page crashed!
const start = async () => {
  const browser = await puppeteer.launch(puppeteerOptions);
  const page = await browser.newPage();

  for (test of ['', 'services', 'contact', 'styleguide']) {
    const name = test || 'home';

    console.log('- - - - - - - - - - - - - - - - - - -');
    console.log(`${name} | start \n`);
    await page.goto(`${puppeteerUrl}${test}`, { waitUntil: 'networkidle0' });

    for (width of [320, 600, 900, 1200]) {
      console.log(`- ${name} | ${width}px`);
      await page.setViewport({ width, height: 600 });

      // Wait a second for the repaints etc to be fufilled.
      await new Promise(resolve => setTimeout(() => resolve(), 1000));

      const saveAs = path.resolve(screenshots, `${name}-${width}.png`);
      const screenshot = await page.screenshot({ fullPage: true, path: saveAs });
    }
    console.log(`\n${name} | finish`);
  }

  // await page.close();
  // await browser.close();
};

try {
  start().then(() => {
    console.log('- - - - - - - - - - - - - - - - - - -');
    console.log('screenshot creation complete');
    process.exit(0);
  });
} catch (error) {
  console.log('- - - - - - - - - - - - - - - - - - -');
  console.log('screenshot creation error');
  console.log(error);
  // Even though we are in an error "catch" state we still exit with an "id" of
  // "0" as we are encountering an issue where the page is crashing at the end of
  // the screen shot sequence. We obtain all of the screenshots yet the browser
  // page crashes.
  process.exit(0);
}
