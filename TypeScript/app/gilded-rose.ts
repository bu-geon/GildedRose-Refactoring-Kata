import { Item } from "./item";
import { AgedBrie } from "./item/agedBrie";
import { BackstagePasses } from "./item/backstagePasses";
import { ConjuredItem } from "./item/conjured";
import { Sulfuras } from "./item/sulfuras";
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    items.forEach((item, i, arr) => (arr[i] = this.classifyItem(item)));
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => item.update());

    return this.items;
  }

  classifyItem(item: Item) {
    const [name, sellIn, quality] = [item.name, item.sellIn, item.quality];

    if (this.isSulfuras(name)) {
      return new Sulfuras(name, sellIn, quality);
    } else if (this.isAgedBrie(name)) {
      return new AgedBrie(name, sellIn, quality);
    } else if (this.isBackstagePasses(name)) {
      return new BackstagePasses(name, sellIn, quality);
    } else if (this.isConjured(name)) {
      return new ConjuredItem(name, sellIn, quality);
    } else {
      return item;
    }
  }

  isSulfuras(name: string) {
    return name.startsWith("Sulfuras");
  }

  isAgedBrie(name: string) {
    return name === "Aged Brie";
  }

  isBackstagePasses(name: string) {
    return name.startsWith("Backstage passes");
  }

  isConjured(name: string) {
    return name.startsWith("Conjured");
  }
}
