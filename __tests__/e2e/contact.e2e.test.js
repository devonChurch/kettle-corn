// require('babel-polyfill');

const isProduction = process.env.NODE_ENV === 'production';
const puppeteer = require('puppeteer');
const puppeteerOptions = isProduction ? {} : { headless: false, slowMo: 50 };
const puppeteerUrls = isProduction
  ? ['https://enhancedigital.co.nz', 'https://www.enhancedigital.co.nz']
  : ['http://localhost:8000', 'http://www.localhost:8000'];

console.log({ isProduction });

jest.setTimeout(20000);

describe('successful form submission', () => {
  puppeteerUrls.forEach(url => {
    test(`submits under (${url})`, async () => {
      const browser = await puppeteer.launch(puppeteerOptions);
      const page = await browser.newPage();
      await page.goto(`${url}/contact/`);

      const $name = await page.$('input[name="Name"]');
      await $name.focus();
      await $name.type('Mr Potato');
      await page.keyboard.press('Tab');

      const $email = await page.$('input:focus');
      await $email.type('mr@potato.com');
      await page.keyboard.press('Tab');

      const $message = await page.$('textarea:focus');
      await $message.type('Test');
      await page.keyboard.press('Tab');

      const $submit = await page.$('button[type="submit"]:focus');
      await $submit.click();
      await new Promise(resolve => setTimeout(() => resolve(), 5000));

      const successMessage = await page.$eval(
        '[data-test="contact-form-success"]',
        $node => $node.innerHTML,
      );

      expect(successMessage).toMatch(/great/gi);

      await browser.close();
    });
  });
});
