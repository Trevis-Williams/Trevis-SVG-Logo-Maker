
import { Triangle, } from 'lib\shapes.mjs';
test('Triangle render() method should return correct SVG string', () => {
  const triangle = new Triangle('blue');
  const svgString = triangle.render();
  // Add your assertions to test the SVG string
  expect(svgString).toContain('<polygon points="0,0 100,0 50,100" fill="blue" />');
});
