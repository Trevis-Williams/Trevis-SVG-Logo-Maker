class Shape {
  constructor(color) {
    this.color = color;
  }

  render() {
    // Implement the SVG rendering logic for common attributes
    return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      ${this.getShapeData()}
    </svg>`;
  }

  getShapeData() {
    // This method should be implemented by child classes
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  getShapeData() {
    return `<polygon points="0,0 200,0 100,200" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  getShapeData() {
    return `<circle cx="100" cy="100" r="100" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  getShapeData() {
    return `<rect x="0" y="0" width="200" height="200" fill="${this.color}" />`;
  }
}

// Usage:
const triangle = new Triangle('green');
const triangleSvgData = triangle.render();
console.log(triangleSvgData);

const circle = new Circle('red');
const circleSvgData = circle.render();
console.log(circleSvgData);

const square = new Square('blue');
const squareSvgData = square.render();
console.log(squareSvgData);


// In shapes.mjs
export { Triangle, Circle, Square };
