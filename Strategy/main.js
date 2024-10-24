class NumberArray {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  printArray() {
    this.strategy.print([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }
}

class Strategy {
  print() {}
}

class ClassicStrategy extends Strategy {
  print(array) {
    array.forEach((item) => console.log(item));
  }
}

class ReverseStrategy extends Strategy {
  print(array) {
    array.reverse().forEach((item) => console.log(item));
  }
}

class EvenStrategy extends Strategy {
  print(array) {
    array.forEach((item) => {
      if (item % 2 === 0) {
        console.log(item);
      }
    });
  }
}

class OddStrategy extends Strategy {
  print(array) {
    array.forEach((item) => {
      if (item % 2 !== 0) {
        console.log(item);
      }
    });
  }
}

const classicStrategy = new ClassicStrategy();
const reverseStrategy = new ReverseStrategy();
const evenStrategy = new EvenStrategy();
const oddStrategy = new OddStrategy();

const numberArray = new NumberArray(classicStrategy);
numberArray.printArray();

console.log('Changing strategy...');

numberArray.setStrategy(reverseStrategy);
numberArray.printArray();

console.log('Changing strategy...');

numberArray.setStrategy(evenStrategy);
numberArray.printArray();

console.log('Changing strategy...');

numberArray.setStrategy(oddStrategy);
numberArray.printArray();
