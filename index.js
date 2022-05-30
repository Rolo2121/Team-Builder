const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const generateSite = require('./src/generate-site');
 
const teamMembers = [];



const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is your employee ID? (Required)',
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log('Please enter your Id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter a valid email!')
                    return false;
                }
            }
        },
        {
           type: 'input',
           name: 'officeNumber',
           message: 'What is your office number? (Required)',
           validate: officeNumber => {
               if (officeNumber) {
                   return true;
               } else {
                   console.log('Please enter your office number!');
                   return false;
               }
           }
        },

    ])
    .then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select which option you would like to continue with:',
            choices: ['add Engineer', 'add Intern', 'finish building my team']
        }
    ])
    .then(userChoice => {
        switch (userChoice.menu) {
            case 'add Engineer':
                promptEngineer();
                break;
            case 'add Intern':
                promptIntern();
                break;
            default:
                buildTeam();
        }
    });
};

const promptEngineer = () => {
    console.log(`
    ================================================================
    Add a New Engineer
    ================================================================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the new engineer? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your engineers name!');
                    return false;
                }  
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is your employee ID? (Required)',
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log('Please enter your Id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter a valid email!')
                    return false;
                }
            }
        },
        {
           type: 'input',
           name: 'github',
           message: 'What is your gitHub name? (Required)',
           validate: officeNumber => {
               if (officeNumber) {
                   return true;
               } else {
                   console.log('Please enter your gitHub name!');
                   return false;
               }
           }
        },   
    ])
    .then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log(`
    =====================================
    Add New Intern
    =====================================
    `)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the new intern? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your interns name!');
                    return false;
                }  
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is your employee ID? (Required)',
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log('Please enter your Id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter a valid email!')
                    return false;
                }
            }
        },
        {
           type: 'input',
           name: 'school',
           message: 'What is your schools name? (Required)',
           validate: officeNumber => {
               if (officeNumber) {
                   return true;
               } else {
                   console.log('Please enter your schools name!');
                   return false;
               }
           }
        },   
    ])
    .then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log(`
    =====================================
    Finished Building my Team!
    =====================================
    `);
}


function init() {
    promptManager()
    .then(function(userInput) {
        console.log(userInput)
        
        
    });
};
// fs.writeFile('./dist/team.html', generateSite(teamMembers));



init();