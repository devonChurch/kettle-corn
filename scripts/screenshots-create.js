// require('babel-polyfill');

const { APP_ENV = 'development' } = process.env;
const isDevelopment = APP_ENV === 'development';
const siteUrls = {
  development: 'http://localhost:8000/',
  stage: 'http://stage.enhancedigital.co.nz/',
  production: 'https://enhancedigital.co.nz/',
};
const path = require('path');
const puppeteer = require('puppeteer');
const puppeteerUrl = siteUrls[APP_ENV];
const puppeteerOptions = isDevelopment
  ? { headless: false, slowMo: 50 }
  : { args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'] };
const screenshots = path.resolve(__dirname, '../screenshots', 'new');
const maxPixelArea = 1200 * 12000;
const delay = () => new Promise(resolve => setTimeout(() => resolve(), 1000));

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

  page.on('error', error => {
    console.log('caught page error', error);
    throw new Error(error);
  });

  for (test of ['', 'services', 'contact']) {
    const name = test || 'home';

    console.log('- - - - - - - - - - - - - - - - - - -');
    console.log(`${name} | start \n`);
    await page.goto(`${puppeteerUrl}${test}`, { waitUntil: 'load' }); // 'networkidle0' 'load'

    for (width of [320, 600, 900, 1200]) {
      console.log(`- ${name} | ${width}px`);
      await page.setViewport({ width, height: 600 });

      // Wait a second for the repaints etc to be fufilled.
      await delay();

      const saveAs = path.resolve(screenshots, `${name}-${width}.png`);
      const screenshot = await page.screenshot({ fullPage: true, path: saveAs });
    }
    console.log(`\n${name} | finish`);
  }

  await page.close();
  await browser.close();
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
  process.exit(1);
}
