
import { Triangle, Circle, Square } from './shapes.mjs';


describe('Shape Classes', () => {
  test('Triangle should render correctly', () => {
    const triangle = new Triangle('green');
    const triangleSvgData = triangle.render();
    expect(triangleSvgData).toContain('<polygon points="0,0 200,0 100,200" fill="green" />');
  });

  test('Circle should render correctly', () => {
    const circle = new Circle('red');
    const circleSvgData = circle.render();
    expect(circleSvgData).toContain('<circle cx="100" cy="100" r="100" fill="red" />');
  });

  test('Square should render correctly', () => {
    const square = new Square('blue');
    const squareSvgData = square.render();
    expect(squareSvgData).toContain('<rect x="0" y="0" width="200" height="200" fill="blue" />');
  });
});
