// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: "What would you like your title to be named?",
        name: "title",
    },
    {
        type: 'input',
        message: "Please write a breif description of your project",
        name: "description",
    },
    {
        type: 'input',
        message: "Please select a license",
        name: "license",
    },
    {
        type: 'input',
        message: "Please input your Github User Name",
        name: "github",
    },
    {
        type: 'input',
        message: "Please input your contact email",
        name: "email",
    },
]).then((answers) => {
    console.log(answers)
});
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
