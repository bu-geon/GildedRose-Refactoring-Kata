export class Item {
  LOWEST_QUALITY = 0;
  HIGHEST_QUALITY = 50;
  DECREASING_QUALITY_VALUE = 1;

  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  update() {
    this.updateSellIn();
    this.updateQuality();
  }

  updateSellIn() {
    this.sellIn -= 1;
  }

  updateQuality() {
    const multiple = this.sellIn < 0 ? 2 : 1;

    this.quality -= this.DECREASING_QUALITY_VALUE * multiple;
    this.quality = Math.max(this.LOWEST_QUALITY);

    // this.quality = Math.max(
    //   this.quality - this.DECREASING_QUALITY_VALUE * multiple,
    //   this.LOWEST_QUALITY
    // );
  }
}
