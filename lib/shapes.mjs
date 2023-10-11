// lib/shapes.mjs

class Triangle {
  constructor() {
      this.color = 'black'; // Default color
  }

  setColor(color) {
      this.color = color;
  }

  render() {
      // Generate SVG string based on the color and other attributes
      const svgString = `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
      return svgString;
  }
}



class Circle {
  constructor(radius) {
      this.radius = radius;
  }

  calculateArea() {
      return Math.PI * this.radius * this.radius;
  }

  calculateCircumference() {
      return 2 * Math.PI * this.radius;
  }
}

class Square {
  constructor(sideLength) {
      this.sideLength = sideLength;
  }

  calculateArea() {
      return this.sideLength * this.sideLength;
  }

  calculatePerimeter() {
      return 4 * this.sideLength;
  }
}



  
  // Example usage:
  export { Triangle, Circle, Square };
