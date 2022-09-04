// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License v2.0') {
    return 'https://opensource.org/licenses/Apache-2.0'
  }
  if (license === 'GNU General Public License v3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  }
  if (license === 'MIT License') {
    return 'https://opensource.org/licenses/MIT'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `## Licenses
    This is the license for the project ${license} `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Table of Contents
_ Description 
_ Usage Information
_ Test Instruction 
_ License
_ Questions

### Description 
${data.description}

### Usage Information 
${data.usage}

### Test Instructions 
${data.test}

### License 
${renderLicenseSection(data.license)}

### Questions
My email: ${data.email}
My Github: ${data.github}

`;
}

module.exports = generateMarkdown;
