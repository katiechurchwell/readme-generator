// TODO: Include packages needed for this application
const fs = require("fs");

// TODO: Create an array of questions for user input
// title, description, table of contents (will try and do dynamically from content?), installation, usage, license, contributing, tests and questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use. ",
  },
  // is there a way to categorize by type and expand options from there?
  {
    type: "list",
    name: "license",
    message: "Please select a license:",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "List your collaborators, if any, with links to their GitHub profiles.",
  },
  {
    type: "input",
    name: "tests",
    message: "Go the extra mile and write tests for your application. Then provide examples on how to run them.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
