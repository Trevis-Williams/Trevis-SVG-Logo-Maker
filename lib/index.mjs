import inquirer from 'inquirer';
import { Triangle, Circle, Square } from './shapes.mjs';
import sharp from 'sharp';

const myTriangle = new Triangle(4, 6);
const myCircle = new Circle(3);
const mySquare = new Square(5);

// Define the generateSVG function
function generateSVG(text, textColor, shape, shapeColor) {
    // Create a Sharp image object with the desired size
    const image = sharp({
        create: {
            width: 200,
            height: 200,
            channels: 4, // For RGBA color
            background: { r: 255, g: 255, b: 255, alpha: 0 }
        }
    });

    // Define the SVG path data for basic shapes
    let pathData;
    if (shape === 'Circle') {
        pathData = `<circle cx="100" cy="100" r="100" fill="${shapeColor}" />`;
    } else if (shape === 'Triangle') {
        pathData = `<polygon points="0,0 100,0 50,100" fill="${shapeColor}" />`;
    } else if (shape === 'Square') {
        pathData = `<rect x="0" y="0" width="100" height="100" fill="${shapeColor}" />`;
    }

    // Add text to the SVG
    const textElement = `<text x="20" y="40" fill="${textColor}">${text}</text>`;

    // Combine the path data and text
    const svgContent = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        ${pathData}
        ${textElement}
    </svg>`;

    // Convert the SVG content to a buffer
    const buffer = Buffer.from(svgContent);

    // Print the SVG content
    console.log(buffer.toString());
}

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
