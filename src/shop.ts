import Item from './items';

class Shop {
  private items: Item[];

  constructor() {
    this.items = [];
    const item1 = new Item('Candy', 10, 'Sour Patch Kids');
    const item2 = new Item('Soda', 20, 'Sprite');
    const item3 = new Item('Ice-Cream', 30, 'Dippin Dots');
    this.items.push(item1, item2, item3);
  }

  public getItems(): Item[] {
    return this.items;
  }
}

export default Shop;
