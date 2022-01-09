// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //push all choices to an array and filter by template literal?
  const licenses = [
    "GNU AGPLv3",
    "GNU GPLv3",
    "GNU LGPLv3",
    "Mozilla Public License 2.0",
    "Apache License 2.0",
    "MIT License",
    "Boost Software License 1.0",
    "The Unlicense",
  ],

  const result = licenses.filter()
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${data.license}

  ##Questions
  If you have any questions about this project, please open an issue or use the contact information below:
  * [${data.github}](https://www.github.com/${data.github})
  * [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
