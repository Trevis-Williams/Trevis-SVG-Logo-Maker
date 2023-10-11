import inquirer from 'inquirer.mjs';
import fs from 'fs'; // Import the 'fs' module for file operations.
import SVG from 'svg.js';
import { Triangle, Circle, Square } from './shapes.mjs';

// Now you can use these classes in your code:
const myTriangle = new Triangle(4, 6);
const myCircle = new Circle(3);
const mySquare = new Square(5);


// Use Inquirer to prompt the user for input.
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text (up to three characters):',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hexadecimal):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hexadecimal):',
        },
    ])
    .then((answers) => {
        generateSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);
    });

// Define a function to generate the SVG file.
function generateSVG(text, textColor, shape, shapeColor) {
    const draw = SVG().addTo('body').size(300, 200);

    // Generate the SVG based on user input.
    // Use the text, textColor, shape, and shapeColor parameters.
    // Add shapes to the SVG canvas, set colors, etc.
    // ...

    // Save the SVG as a string.
    const svgString = draw.svg();

    // Write the SVG to a file.
    fs.writeFileSync('logo.svg', svgString, 'utf-8');

    console.log('Generated logo.svg');
}
