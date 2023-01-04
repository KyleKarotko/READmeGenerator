// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return ''
  } else {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-green.svg)`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return ''
  } else {
    return `[License](#license)`
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
  } else {
    return '##license'
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    ##Table of Contents 
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - ${renderLicenseLink(data.license)}
    - [Contribution](#how to contribute)
    - [Tests](#tests)
    - [Questions](#contact me with questions)

    ##description
    ${data.description}
    ##installation
    ${data.installation}
    ##usage
    ${data.usage}
    ${renderLicenseSection(data.license)}
    ${renderLicenseBadge(data.license)}
    ##how to contribute
    ${data.contributing}
    ##tests
    ${data.tests}
    ##contact me with questions
    ${data.github}
    ${data.email};
    `;
    }

module.exports = generateMarkdown;
