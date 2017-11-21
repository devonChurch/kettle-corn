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

// ['services', 'contact', 'styleguide'].forEach(async test => {
const start = async () => {
  for (test of ['services', 'contact', 'styleguide']) {
    try {
      console.log(`*** ${test} | start`);
      const browser = await puppeteer.launch(puppeteerOptions);
      const page = await browser.newPage();
      await fs.ensureDir(screenshots);
      await page.goto(`https://enhancedigital.co.nz/${test}/`, { waitUntil: 'load' });

      for (width of [320, 600, 900, 1200]) {
        console.log(`>>> ${test} | ${width}px`);
        await page.setViewport({ width, height: 600 });
        const saveAs = path.resolve(screenshots, `${test}-${width}.png`);
        const screenshot = await page.screenshot({ fullPage: true, path: saveAs });
      }

      await browser.close();
    } catch (error) {
      console.log(error);
    }
    console.log(`--- ${test} | finish`);
  }
};
// });

start();
