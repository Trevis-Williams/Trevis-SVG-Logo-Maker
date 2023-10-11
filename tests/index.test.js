const { generateSVG } = require('../lib/index.js'); // Adjust the path as needed
const fs = require('fs');

test('Generate SVG with provided input', () => {
  generateSVG('ABC', 'red', 'Circle', 'blue');
  const svgExists = fs.existsSync('logo.svg');
  expect(svgExists).toBe(true);
});
