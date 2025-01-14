// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./develop/utils/generateMarkdown");

console.log("Welcome to the README generator.");

// TODO: Create an array of questions for user input
// title, description, table of contents (will try and do dynamically from content?), installation, usage, license, contributing, tests and questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message:
      "Please provide a description of your project and a link to the deployed application. (required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use.",
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
      "Apache 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
      "None",
    ],
  },
  {
    type: "input",
    name: "credits",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Are there tests for your application? Provide examples on how to run them.",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username? (required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your github username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address? (required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    fs.writeFile("./dist/README.md", markdown, (err) => {
      if (err) {
        reject(err);
        return;
      } else {
        console.log("README created!");
      }
    });
  });
}

// Function call to initialize app
init();
