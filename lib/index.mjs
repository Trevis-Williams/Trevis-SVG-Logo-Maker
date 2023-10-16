import inquirer from 'inquirer';
import { Triangle, Circle, Square } from './shapes.mjs';
import sharp from 'sharp';
import fs from 'fs';
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
    let newShape;
    if (shape === 'Circle') {
        newShape = new Circle(shapeColor);
    } else if (shape === 'Triangle') {
        newShape = new Triangle(shapeColor) ;
    } else if (shape === 'Square') {
        newShape = new Square (shapeColor) ;
    }
const pathData = newShape.getShapeData()
    // Add text to the SVG
    const textElement = `<text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%" font-size="40px"  fill="${textColor}">${text}</text>`;

    // Combine the path data and text
    const svgContent = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        ${pathData}
        ${textElement}
    </svg>`;

    // Convert the SVG content to a buffer
    const buffer = Buffer.from(svgContent);

    // Print the SVG content
    console.log(buffer.toString());

    fs.writeFile("./lib/examples/test.svg", (buffer.toString()), function(err){
        if(err){
            console.log(err)
        }
        console.log('svg created!!!')
    })
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
