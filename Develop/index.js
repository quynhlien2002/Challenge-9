// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            title: 'title',
            message: 'What is your title?',
        },
        {
            type: 'input', 
            name: 'description',
            message: 'Write your description',
        },
        {
            type: 'input',
            name: 'usage information',
            message: 'How to use?',
        },
        {
            type: 'input',
            name: 'test instructions',
            message: 'How to test?',
        },
        {
            type: 'list',
            message: 'What license is using?',
            name: 'license',
            choices: ['Apache License v2.0', 'GNU General Public License v3.0', 'MIT License']
        },
        {
            type: 'input',
            name: 'Github',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address',
        },
    ])
};

// TODO: Create a function to write README file
// function writeToFile(filename, data) {}
const writeToFile = () => {
    questions()
    .then((answer) => fs.writeFile('README.md', ))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
