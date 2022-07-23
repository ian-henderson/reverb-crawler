import { Browser } from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(StealthPlugin());

// TODO: set user agent
// TODO: set view port size

export default abstract class Spider {
  browser: Browser | undefined;

  init = async () => {
    if (!this.browser)
      this.browser = await puppeteer.launch({ headless: true });
  };

  die = async () => {
    if (this.browser) await this.browser.close();
  };
}
