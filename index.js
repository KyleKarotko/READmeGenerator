// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = [
// TODO: Create an array of questions for user input
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please give a description of your project repository:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide insturctions on how to install your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions on how to use your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license are you using on your project repository?',
      choices: ['MIT', 'BSD', 'Microsoft Public License', 'None']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide guidelines on how others can contribute to you project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide any tests used to test the project and how to use them:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your gitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
  ];

 function writeFile(data) {
    fs.writeFile(`${data.title}.md`, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('A README.md file has been generated'))
 };

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((response) => {
        writeFile(response)})
};

// Function call to initialize app
init();
