const licenseArray = [
  {
    name: "GNU AGPLv3",
    badgeUrl: "https://img.shields.io/badge/License-AGPL_v3-blue.svg",
    licenseUrl: "https://www.gnu.org/licenses/agpl-3.0",
    description: "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available."
  },
  {
    name: "GNU GPLv3",
    badgeUrl: "https://img.shields.io/badge/License-GPLv3-blue.svg",
    licenseUrl: "https://www.gnu.org/licenses/gpl-3.0",
    description: "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights."
  },
  {
    name: "GNU LGPLv3",
    badgeUrl: "https://img.shields.io/badge/License-LGPL_v3-blue.svg",
    licenseUrl: "https://www.gnu.org/licenses/lgpl-3.0",
    description: "Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work."
  },
  {
    name: "Mozilla Public License 2.0",
    badgeUrl: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
    licenseUrl: "https://opensource.org/licenses/MPL-2.0",
    description: "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work."
  },
  {
    name: "Apache 2.0",
    badgeUrl: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
    licenseUrl: "https://opensource.org/licenses/Apache-2.0",
    description: "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
  },
  {
    name: "MIT License",
    badgeUrl: "https://img.shields.io/badge/License-MIT-yellow.svg",
    licenseUrl: "https://opensource.org/licenses/MIT",
    description: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
  },
  {
    name: "Boost Software License 1.0",
    badgeUrl: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
    licenseUrl: "https://www.boost.org/LICENSE_1_0.txt",
    description: "A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
  },
  {
    name: "The Unlicense",
    badgeUrl: "https://img.shields.io/badge/license-Unlicense-blue.svg",
    licenseUrl: "http://unlicense.org/",
    description: "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code."
  },
];

// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  return `
  [![${license.name}](${license.badgeUrl})](${license.licenseUrl})
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license) {
    return `
  ## License
  This project is licensed under [${license.name}](${license.licenseUrl}). ${license.description}
  `;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseObject = licenseArray.find(({ name }) => name === data.license);

  return `
  # ${data.title} ${renderLicenseBadge(licenseObject)}

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

  ## Questions
  If you have any questions about this project, please open an issue or use the contact information below:
  * [${data.github}](https://www.github.com/${data.github})
  * [${data.email}](mailto:${data.email})
  
  ${renderLicenseSection(licenseObject)}
`;
}

module.exports = generateMarkdown;
