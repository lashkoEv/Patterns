class Collection {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  createIterator() {
    return new Iterator(this);
  }
}

class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.position = 0;
  }

  hasNext() {
    return this.position < this.collection.items.length;
  }

  next() {
    const item = this.collection.items[this.position];

    this.position++;

    return item;
  }
}

const collection = new Collection();

collection.addItem('Item 1');
collection.addItem('Item 2');
collection.addItem('Item 3');
collection.addItem('Item 4');
collection.addItem('Item 5');

const iterator = collection.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
