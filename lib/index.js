import inquirer from 'inquirer';
import SVG from 'svg.js';
import { Triangle, Circle, Square } from './shapes';


// Define a function to generate the SVG file.
function generateSVG(text, textColor, shape, shapeColor) {
    const draw = SVG().size(300, 200);
    // Generate the SVG based on user input.
    // Use the text, textColor, shape, and shapeColor parameters.
    // Add shapes to the SVG canvas, set colors, etc.
    // ...

    // Save the SVG to 'logo.svg'.
    draw.svg('logo.svg');

    console.log('Generated logo.svg');
}

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
