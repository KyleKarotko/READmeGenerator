// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
const makeReadMe = ({title, description, installation, usage, license, contributing, tests, questions}) =>
`#${title}
####${description}
####${installation}
####${usage}
####${license}
####${contributing}
####${tests}
####${questions}`;




function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
