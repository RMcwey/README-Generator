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
        message: "Please input the site URL",
        name: "url",
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

const generateREADME = ({title, description, url, license, github, email}) => {
    return `# ${title}
    ### Table of contents
    * [Description](#description)
    * [Built with](#built-with)
    * [Screen Shot](#screen-shot)
    * [Application URL](#application-url)
    * [License](#license)
    
    
    ### Description: 
    ${description}
    <br>
    
    ### Built with: 
    This application is built using :
    * HTML
    * CSS
    * Bootstrap
    * JavaScript
    
    ### Screen Shot:
    
    ### Application URL:
    
    ${url}

    <br>

    ### Github
    github.com/${github}

    ### Questions
    For any questions please contact me at ${email}

    ### License: ${license}
    
    `;
}
fs.writeFile('README.md', generateREADME(answers), (err) =>
    err ? console.error(err) : console.log('Commit logged!'));
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
