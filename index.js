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
        message: "What was your motivation for this project?",
        name: "motivation",
    },
    {
        type: 'input',
        message: "Why did you build this project?",
        name: "why",
    },
    {
        type: 'input',
        message: "What problem does this project solve?",
        name: "solve",
    },
    {
        type: 'input',
        message: "What did you learn?",
        name: "learn",
    },
    {
        type: 'input',
        message: "What are the steps required to install your project?",
        name: "installation",
    },
    {
        type: 'input',
        message: "Please list all your collaborators on this project including yourself and any neccessary third-party assets",
        name: "collaborators",
    },
    {
        type: 'input',
        message: "Please input the site URL",
        name: "url",
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Which is better?',
        choices: ['MIT', 'GNUv2', 'GNUv3'],
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
    var license = answers.license
    var licenseResults = ''
    generateLicense(license);
    function generateLicense(license) {
        if (license === 'MIT'){
            licenseResults = `Copyright (c) <year> <copyright holders>

            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
            
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.`;
        } else if (license === 'GNUv2') {
            licenseResults = "https://www.gnu.org/licenses/gpl-2.0.txt"
            // console.log(license)
        } else if (license === 'GNUv3') {
            licenseResults = " http://www.gnu.org/licenses/gpl-3.0.txt"
        }
    }
    console.log(licenseResults);
    console.log(answers, licenseResults)
const generateREADME = ({title, motivation, why, solve, learn, installation, url, collaborators, license, github, email}, licenseResults) => {
    return `# ${title}
## Table of contents
    * [Description](#description)
    * [Installation] (#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Application URL](#application-url)
    * [Questions](#questions)
    

## Description 
Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation? ${motivation}
- Why did you build this project? ${why}
- What problem does it solve? ${solve}
- What did you learn? ${learn}

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. ${installation}

## Usage

Provide instructions and examples for use. Include screenshots as needed.

## Live URL
${url}

## Credits
${collaborators}

## License: ${license}
${licenseResults}

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Provide your tests here.

## Questions
    My Github page: ${github}
    For any questions please contact me at ${email}
    `;
}
// fs.writeFile('README.md', generateREADME(answers, licenseResults), (err) =>
//     err ? console.error(err) : console.log('Commit logged!'));
});
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


// ## Badges

// ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

