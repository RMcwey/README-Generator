const inquirer = require('inquirer');
const fs = require('fs');

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
        message: "Please input the site URL",
        name: "url",
    },
    {
        type: 'input',
        message: "Please list all your collaborators on this project including yourself and any neccessary third-party assets",
        name: "collaborators",
    },
    {
        type: 'input',
        message: "Please input how to test your product. If not applicable, leave empty",
        name: "test",
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Which is better?',
        choices: ['MIT', 'Apache 2.0', 'GNU GPL v2', 'GNU GPL v3'],
    },
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
    var year = answers.year;
    var licenseCollaborators = answers.licenseCollaborators
    var licenseResults = '';
    var licenseBadge = '';
    generateLicense(answers);
    function generateLicense(answers) {
        if (license === 'MIT'){
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

            licenseResults = `Copyright (c) <${year}> <${licenseCollaborators}>

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

        } else if (license === 'Apache 2.0') {
            licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

            licenseResults = `Please refer to this link for the Apache https://www.apache.org/licenses/LICENSE-2.0

            Copyright [${year}] [${licenseCollaborators}]

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
           
        } else if (license === 'GNU GPL v2') {
            licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"

            licenseResults = `Please refer to this link for the GNU General Public Licences https://www.gnu.org/licenses/gpl-2.0.txt
            Copyright (C) ${year}  ${licenseCollaborators}

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
           
            // console.log(license)
        } else if (license === 'GNU GPL v3') {
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"

            licenseResults = `Please refer to this link for the GNU General Public Licences http://www.gnu.org/licenses/gpl-3.0.txt
            Copyright (C) <${year}>  <${licenseCollaborators}>

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
            
        }
    }

const generateREADME = ({title, motivation, why, solve, learn, installation, url, collaborators, test, license, year, licenseCollaborators, github, email}, licenseResults) => {
    return `# ${title}

${licenseBadge}
<br>

## Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Live URL](#live-url)
* [Questions](#questions)
* [License](#license)
    

## Description 

- What was your motivation? ${motivation}
- Why did you build this project? ${why}
- What problem does it solve? ${solve}
- What did you learn? ${learn}

## Installation

${installation}

## Usage

Provide instructions and examples for use. Include screenshots as needed.

## Live URL
${url}

## Credits
${collaborators}

## Tests

${test}

## Questions
My Github page: https://github.com/${github}
<br>
For any questions please contact me at ${email}

## License 
<br>
${license}
<br>
${licenseResults}
    `;
}
fs.writeFile('README.md', generateREADME(answers, licenseResults), (err) =>
    err ? console.error(err) : console.log('README successfully generated!'));
});