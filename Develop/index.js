// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your title?',
        },
        {
            type: 'input', 
            name: 'description',
            message: 'Write your description',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How to use?',
        },
        {
            type: 'input',
            name: 'test',
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
            name: 'github',
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
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            return console.logg(err);
        }

    console.log("Yay");
    })
}
// const writeToFile = () => {
//     questions()
//     .then((answer) => 


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers));
    })
}
    
// Function call to initialize app
init();
