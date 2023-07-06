export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}


export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));

// 
export function updateQuality(item) {
  if (item.sellIn > 0) {
      item.quality > 0 ? item.quality-- : item.quality = 0
      item.sellIn--
  } else {
      item.quality > 0 ? item.quality -= 2: item.quality = 0
      item.sellIn--
  }
}

