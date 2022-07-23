interface ListingConstructorArgs {
  condition?: string;
  imgSrc?: string;
  originalPrice?: string;
  price?: string;
  title?: string;
  url?: string;
}

export default class Listing {
  _originalPrice?: string;
  _price?: string;
  condition?: string;
  imgSrc?: string;
  title?: string;
  url?: string;

  constructor({
    condition,
    imgSrc,
    originalPrice,
    price,
    title,
    url,
  }: ListingConstructorArgs) {
    this._originalPrice = originalPrice;
    this._price = price;
    this.condition = condition;
    this.imgSrc = imgSrc;
    this.title = title;
    this.url = url;
  }

  static priceStringToNumber = (priceString?: string): number | undefined => {
    if (!priceString) return undefined;
    const price = priceString.split("$")[1];
    if (!price) return undefined;
    return Number(price);
  };

  get discount(): number | undefined {
    const { originalPrice, price } = this;

    if (!originalPrice || !price) return undefined;

    return (originalPrice - price) / originalPrice;
  }

  get originalPrice() {
    return Listing.priceStringToNumber(this._originalPrice);
  }

  get price() {
    return Listing.priceStringToNumber(this._price);
  }
}
