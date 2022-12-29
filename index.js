// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown')
//const questions = [];



// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please give a description of your project repository',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide insturctions on how to install your project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide instructions on how to use your project',
    },
    {
      type: 'input',
      name: 'license',
      message: 'What license are you using on your project repository?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide guidelines on how others can contribute to you project',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide any tests used to test the project and how to use them',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Please enter your gitHub username.',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'What is your email address?',
      },
  ])
  .then((answers) => {
    const readMeContent = makeReadMe(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('A README.md file has been generated')
    );
  });


// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
