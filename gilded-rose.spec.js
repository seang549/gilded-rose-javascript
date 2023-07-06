import { expect, describe, it, test } from "vitest";
import { Item, items, updateQuality } from "./gilded-rose.js";
import { Conjured, LegendaryItem, AgedItem, Ticket } from './class.js'

// Basic item test
describe("basicUpdateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);

    updateQuality(testItem);

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});


// Legendary item test
describe('LegendaryUpdateQuality', () => {
  it('doesn\'t make any changes to a legendary item\'s price or quality', () => {
    const testItem = new LegendaryItem('Sulfuras, Hand of Ragnaros', 0, 80)
    items.push(testItem)

    testItem.updateQuality()

    expect(testItem.sellIn).toBe(0);
    expect(testItem.quality).toBe(80);
  })
})


// Brie test 
describe('agedUpdateQuality', () => {
  it('increases cheese quality with time', () => {
    const testItem = new AgedItem('Aged Brie', 2, 0)
    items.push(testItem)

    testItem.updateQuality()

    expect(testItem.sellIn).toBe(1);
    expect(testItem.quality).toBe(1);
  })
})


// Tickets tests
describe('ticketUpdateQuality', () => {
  it('increases ticket quality by 2 10 or fewer days before concert', () => {
    const testItem = new Ticket('Backstage passes to a TAFKAL80ETC concert', 9, 40)
    items.push(testItem)

    testItem.updateQuality()

    expect(testItem.sellIn).toBe(8);
    expect(testItem.quality).toBe(42);
  })
})


describe('ticketUpdateQuality', () => {
  it('increases ticket quality by 3 5 or fewer days before concert', () => {
    const testItem = new Ticket('Backstage passes to a TAFKAL80ETC concert', 5, 40)
    items.push(testItem)

    testItem.updateQuality()

    expect(testItem.sellIn).toBe(4);
    expect(testItem.quality).toBe(43);
  })
})

describe('ticketUpdateQuality', () => {
  it('Drops ticket price to zero after the concert', () => {
    const testItem = new Ticket('Backstage passes to a TAFKAL80ETC concert', 0, 40)
    items.push(testItem)

    testItem.updateQuality()

    expect(testItem.sellIn).toBe(-1);
    expect(testItem.quality).toBe(0);
  })
})

// Conjured test 
describe('conjuredUpdateQuality', () => {
  it('decreases conjured quality with time by two', () => {
    const testItem = new Conjured('Conjured Mana Cake', 3, 6)
    items.push(testItem)

    testItem.updateQuality()

    expect(testItem.sellIn).toBe(2);
    expect(testItem.quality).toBe(4);
  })
})


describe('conjuredUpdateQuality', () => {
  it('decreases conjured quality with time by four if zero or below', () => {
    const testItem = new Conjured('Conjured Mana Cake', 0, 6)
    items.push(testItem)

    testItem.updateQuality()

    expect(testItem.sellIn).toBe(-1);
    expect(testItem.quality).toBe(2);
  })
})