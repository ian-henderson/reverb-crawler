import fs from "fs";

import { ListingsSpider, ProductType } from "./spiders";

(async function main() {
  console.log(fs.readFileSync("./src/ascii.txt", { encoding: "utf-8" }));

  const listingsSpider = new ListingsSpider();

  await listingsSpider.crawl({
    pages: 10,
    spiderConfigs: [
      { productType: ProductType.Amps },
      { productType: ProductType.EffectsAndPedals },
      { productType: ProductType.ElectricGuitars },
    ],
  });

  await listingsSpider.die();
})();
