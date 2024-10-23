class Shape {
  accept(visitor) {}
}

class Rectangle extends Shape {
  constructor(height, width) {
    super();
    this.height = height;
    this.width = width;
  }

  accept(visitor) {
    visitor.visitRectangle(this);
  }
}

class Square extends Shape {
  constructor(height) {
    super();
    this.height = height;
  }

  accept(visitor) {
    visitor.visitSquare(this);
  }
}

class PerimeterVisitor {
  visitRectangle(element) {
    const perimeter = (element.height + element.width) * 2;

    console.log(`Rectangle perimeter: ${perimeter}`);
  }

  visitSquare(element) {
    const perimeter = element.height * 4;

    console.log(`Square perimeter: ${perimeter}`);
  }
}

class AreaVisitor {
  visitRectangle(element) {
    const area = element.height * element.width;

    console.log(`Rectangle area: ${area}`);
  }

  visitSquare(element) {
    const area = element.height * element.height;

    console.log(`Square area: ${area}`);
  }
}

const printParameters = (components, visitor) => {
  for (const component of components) {
    component.accept(visitor);
  }
};

const components = [new Rectangle(5, 10), new Square(5)];

const perimeterVisitor = new PerimeterVisitor();
printParameters(components, perimeterVisitor);

const areaVisitor = new AreaVisitor();
printParameters(components, areaVisitor);
