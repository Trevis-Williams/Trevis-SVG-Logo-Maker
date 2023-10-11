const inquirer = require('inquirer');
const { generateSVG } = require('./index.test.mjs');

test('generateSVG should create SVG content', async () => {
    const answers = {
        text: 'Test',
        textColor: 'blue',
        shape: 'Circle',
        shapeColor: 'red',
    };

    const spy = jest.spyOn(inquirer, 'prompt').mockResolvedValue(answers);

    const result = await generateSVG(); // Pass any required arguments here

    expect(result).toContain('<svg');
    expect(result).toContain('text="Test"');
    expect(result).toContain('fill="blue"');
    expect(result).toContain('<circle');
    expect(result).toContain('fill="red"');

    spy.mockRestore();
});