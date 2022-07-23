import fs from "fs";
import { ElementHandle } from "puppeteer";

import { createUrl } from "../../utils";
import Spider from "../Spider";
import Listing from "./Listing";
import { Category, ListingsSpiderConfig, ProductType } from "./types";

export * from "./types";

export default class ListingsSpider extends Spider {
  domain: string = "reverb.com";
  minumunDiscount: number = 0.21;
  path: string = "marketplace";

  crawl = async ({
    pages = 1,
    spiderConfigs = [{ productType: ProductType.EffectsAndPedals }],
  }: ICrawl): Promise<void> => {
    if (!this.browser) await this.init();

    const results = Object.fromEntries(
      await Promise.all(
        spiderConfigs.map(({ categories, productType }) =>
          this.crawlProductType({ categories, pages, productType })
        )
      )
    );

    fs.writeFileSync("listings.json", JSON.stringify(results, null, 4));
  };

  crawlProductType = async ({
    categories,
    pages,
    productType,
  }: ICrawlProductType) => {
    // 1 call per productType per category
    const listings = await Promise.allSettled(
      Array.from(Array(pages)).map((_, index) =>
        this.parseListingsPage({ pageNumber: index + 1, productType })
      )
    ).then((results: PromiseSettledResult<Listing[]>[]) =>
      results
        .filter((result) => result.status === "fulfilled")
        .flatMap((result: any) => result.value)
    );

    const sortedListings = listings.sort(
      ({ discount: discountA }: Listing, { discount: discountB }: Listing) => {
        if (discountA === undefined || discountB === undefined) return 0;
        if (discountA > discountB) return -1;
        if (discountA < discountB) return 1;
        return 0;
      }
    );

    return [productType, sortedListings];
  };

  createUrl = ({ pageNumber, productType }: ICreateUrl) =>
    createUrl({
      domain: this.domain,
      params: {
        on_sale: "true",
        page: pageNumber,
        product_type: productType,
      },
      path: this.path,
    });

  filter = ({ discount }: Listing) => {
    if (discount === undefined) return false;

    return discount > this.minumunDiscount;
  };

  parseListingsPage = async ({
    pageNumber,
    productType,
  }: IParseListingsPage): Promise<Listing[]> => {
    if (!this.browser) return [];

    const page = await this.browser.newPage();
    await page.goto(this.createUrl({ pageNumber, productType }), {
      waitUntil: "networkidle0",
    });
    const listings = await Promise.all(
      await page
        .$$("li.sortable-tile")
        .then((listings) => listings.map(this.scrapeListingData))
    ).then((listings) => listings.filter(this.filter));

    await page.close();

    return listings;
  };

  scrapeListingData = async (listing: ElementHandle): Promise<Listing> => {
    function getTextContent(selector: string) {
      return listing.$eval(selector, (element) => element.textContent);
    }

    const [condition, imgSrc, originalPrice, price, title, url] =
      await Promise.allSettled([
        getTextContent("div.condition-display__label"),
        listing.$eval("img", (element) => element.getAttribute("src")),
        getTextContent("span.mr-space.td-line-through"),
        getTextContent("span.price-display"),
        getTextContent("h4.grid-card__title"),
        listing.$eval("a.grid-card__inner", (element: Element) =>
          element.getAttribute("href")
        ),
      ])
        .then((results) =>
          results.map((result) => {
            if (result.status === "rejected") return undefined;

            return result.value || undefined;
          })
        )
        .catch(() => []);

    return new Listing({
      condition,
      imgSrc,
      originalPrice,
      price,
      title,
      url: createUrl({ domain: this.domain, path: url }),
    });
  };
}

interface ICrawl {
  pages: number;
  spiderConfigs: ListingsSpiderConfig[];
}

interface ICrawlProductType {
  categories?: Category[];
  pages: number;
  productType: ProductType;
}

interface ICreateUrl {
  pageNumber: number;
  productType: ProductType;
}

interface IParseListingsPage {
  pageNumber: number;
  productType: ProductType;
}
