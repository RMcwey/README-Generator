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
        choices: ['MIT', 'Apache 2.0', 'GNU GPL v2', 'GNU GPL v3'],
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
    var license = answers.license;
    var licenseResults = '';
    var licenseBadge = '';
    generateLicense(license);
    function generateLicense(license) {
        if (license === 'MIT'){
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            inquirer.prompt([
                {
                    type: 'input',
                    message: "Please input the year of creation.",
                    name: "year",
                },
                {
                    type: 'input',
                    message: "Please list all of the people you want listed in your license.",
                    name: "licenseCollaborators",
                },
            ]).then((licenseAnswers) => {
            licenseResults = `Copyright (c) <${licenseAnswers.year}> <${licenseAnswers.licenseCollaborators}>

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
            return console.log(licenseResults)
            });
        } else if (license === 'Apache 2.0') {
            inquirer.prompt([
                {
                    type: 'input',
                    message: "Please input the year of creation.",
                    name: "year",
                },
                {
                    type: 'input',
                    message: "Please list all of the people you want listed in your license.",
                    name: "licenseCollaborators",
                },
            ]).then((licenseAnswers) => {
            licenseResults = `Please refer to this link for the Apache https://www.apache.org/licenses/LICENSE-2.0

            Copyright [${licenseAnswers.year}] [${licenseAnswers.licenseCollaborators}]

            Licensed under the Apache License, Version 2.0 (the "License");
            you may not use this file except in compliance with the License.
            You may obtain a copy of the License at
         
              http://www.apache.org/licenses/LICENSE-2.0
         
            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            See the License for the specific language governing permissions and
            limitations under the License.
            `;
            return console.log(licenseResults)
            }); 
        } else if (license === 'GNU GPL v2') {
            inquirer.prompt([
                {
                    type: 'input',
                    message: "Please input the year of creation.",
                    name: "year",
                },
                {
                    type: 'input',
                    message: "Please list all of the people you want listed in your license.",
                    name: "licenseCollaborators",
                },
            ]).then((licenseAnswers) => {
            licenseResults = `Please refer to this link for the GNU General Public Licences https://www.gnu.org/licenses/gpl-2.0.txt
            Copyright (C) ${licenseAnswers.year}  ${licenseAnswers.licenseCollaborators}

            This program is free software; you can redistribute it and/or
            modify it under the terms of the GNU General Public License
            as published by the Free Software Foundation; either version 2
            of the License, or (at your option) any later version.
            
            This program is distributed in the hope that it will be useful,
            but WITHOUT ANY WARRANTY; without even the implied warranty of
            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
            GNU General Public License for more details.
            
            You should have received a copy of the GNU General Public License
            along with this program; if not, write to the Free Software
            Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
            `;
            return console.log(licenseResults)
            });
            // console.log(license)
        } else if (license === 'GNU GPL v3') {
            inquirer.prompt([
                {
                    type: 'input',
                    message: "Please input the year of creation.",
                    name: "year",
                },
                {
                    type: 'input',
                    message: "Please list all of the people you want listed in your license.",
                    name: "licenseCollaborators",
                },
            ]).then((licenseAnswers) => {
            licenseResults = `Please refer to this link for the GNU General Public Licences http://www.gnu.org/licenses/gpl-3.0.txt
            Copyright (C) <${licenseAnswers.year}>  <${licenseAnswers.licenseCollaborators}>

            This program is free software: you can redistribute it and/or modify
            it under the terms of the GNU General Public License as published by
            the Free Software Foundation, either version 3 of the License, or
            (at your option) any later version.
        
            This program is distributed in the hope that it will be useful,
            but WITHOUT ANY WARRANTY; without even the implied warranty of
            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
            GNU General Public License for more details.
        
            You should have received a copy of the GNU General Public License
            along with this program.  If not, see <https://www.gnu.org/licenses/>
            `;
            return console.log(licenseResults)
            });
        }
    }
    // console.log(licenseResults);
    // console.log(answers, licenseResults)
const generateREADME = ({title, motivation, why, solve, learn, installation, url, collaborators, license, github, email}, licenseResults) => {
    return `# ${title}
    
    ${licenseBadge}

    ## Table of contents
        * [Description](#description)
        * [Installation] (#installation)
        * [Usage](#usage)
        * [Credits](#credits)
        * [Application URL](#application-url)
        * [Questions](#questions)
        * [License](#license)
        

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

    ## How to Contribute

    If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

    ## Tests

    Provide your tests here.

    ## Questions
    My Github page: https://github.com/${github}
    For any questions please contact me at ${email}

    ## License: ${license}
    ${licenseResults}
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

