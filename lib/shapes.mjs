// lib/shapes.js
class Triangle {
    constructor(base, height) {
      this.base = base;
      this.height = height;
    }
  
    // Method to calculate the area of the triangle
    calculateArea() {
      return 0.5 * this.base * this.height;
    }
  
    // Method to calculate the perimeter of the triangle
    calculatePerimeter(side1, side2, side3) {
      return side1 + side2 + side3;
    }
  }
  
  // Example usage:
  const myTriangle = new Triangle(4, 6);

class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Method to calculate the area of the circle
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    // Method to calculate the circumference of the circle
    calculateCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Example usage:
  const myCircle = new Circle(3);

class Square {
    constructor(sideLength) {
      this.sideLength = sideLength;
    }
  
    // Method to calculate the area of the square
    calculateArea() {
      return this.sideLength * this.sideLength;
    }
  
    // Method to calculate the perimeter of the square
    calculatePerimeter() {
      return 4 * this.sideLength;
    }
  }
  
  // Example usage:
  const mySquare = new Square(5);
module.exports = { Triangle, Circle, Square };
