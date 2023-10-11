import { generateSVG } from '../lib/index.mjs'; // Adjust the path as needed
import fs from 'fs';

test('Generate SVG with provided input', () => {
  generateSVG('ABC', 'red', 'Circle', 'blue');
  const svgExists = fs.existsSync('logo.svg');
  expect(svgExists).toBe(true);
});

