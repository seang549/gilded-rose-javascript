import { Item } from './gilded-rose.js'

export class LegendaryItem extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality) 
    }

    updateQuality() {
        this.sellIn = 0
    }
}


export class AgedItem extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality) 
    }

    updateQuality() {
        this.quality < 50 ? this.quality++ : this.quality = 50
        this.sellIn--
    }
}


export class Ticket extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality) 
    }

    updateQuality() {
        if (this.sellIn > 10) {
            this.quality < 50 ? this.quality++ : this.quality = 50
        } else if (this.sellIn <= 10 && this.sellIn > 5) {
            this.quality < 50 ? this.quality += 2 : this.
            quality = 50
        } else if (this.sellIn <= 5 && this.sellIn > 0) {
            this.quality < 50 ? this.quality += 3 : this.quality = 50
        } else if (this.sellIn <= 0) {
            this.quality = 0
        }
        this.sellIn--
    }
}

export class Conjured extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality)
    }

    updateQuality() {
        if (this.sellIn > 0) {
            this.quality > 0 ? this.quality -= 2 : this.quality = 0
            this.sellIn--
        } else {
            this.quality > 0 ? this.quality -= 4 : this.quality = 0
            this.sellIn--
        }
    }
}





  