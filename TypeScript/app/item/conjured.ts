import { Item } from ".";

export class ConjuredItem extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    const multiple = 2;

    this.quality -= this.DECREASING_QUALITY_VALUE * multiple;
    this.quality = Math.max(this.quality, this.LOWEST_QUALITY);
  }
}
