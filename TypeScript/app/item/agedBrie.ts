import { Item } from ".";

export class AgedBrie extends Item {
  INCREASE_QUALITY_VALUE = 1;

  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    this.quality += this.INCREASE_QUALITY_VALUE;
    this.quality = Math.min(this.quality, this.HIGHEST_QUALITY);
  }
}
