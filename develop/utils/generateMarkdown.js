// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //push all choices to an array and filter by template literal?
  let licenses = [
    {
      name: "GNU AGPLv3",
      badgeUrl: "https://img.shields.io/badge/License-AGPL_v3-blue.svg",
      licenseUrl: "https://www.gnu.org/licenses/agpl-3.0"
    },
    {
      name: "GNU GPLv3",
      badgeUrl: "https://img.shields.io/badge/License-GPLv3-blue.svg",
      licenseUrl: "https://www.gnu.org/licenses/gpl-3.0"
    },
    {
      name: "GNU LGPLv3",
      badgeUrl: "https://img.shields.io/badge/License-LGPL_v3-blue.svg",
      licenseUrl: "https://www.gnu.org/licenses/lgpl-3.0"
    },
    {
      name: "Mozilla Public License 2.0",
      badgeUrl: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
      licenseUrl: "https://opensource.org/licenses/MPL-2.0"
    },
    {
      name: "Apache 2.0",
      badgeUrl: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
      licenseUrl: "https://opensource.org/licenses/Apache-2.0"
    },
    {
      name: "MIT License",
      badgeUrl: "https://img.shields.io/badge/License-MIT-yellow.svg",
      licenseUrl: "https://opensource.org/licenses/MIT"
    },
    {
      name: "Boost Software License 1.0",
      badgeUrl: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
      licenseUrl: "https://www.boost.org/LICENSE_1_0.txt"
    },
    {
      name: "The Unlicense",
      badgeUrl: "https://img.shields.io/badge/license-Unlicense-blue.svg",
      licenseUrl: "http://unlicense.org/"
    },
  ];

  const result = licenses.filter();
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License
  ![${data.license}](https://img.shields.io/badge/license-${data.license}-blue)
  ${data.license}
  `;
}

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

  ##Questions
  If you have any questions about this project, please open an issue or use the contact information below:
  * [${data.github}](https://www.github.com/${data.github})
  * [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
