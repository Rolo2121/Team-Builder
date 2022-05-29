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
        }

    ])
    .then(answer => {
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
}

function init() {
    promptManager()
    .then(function(userInput) {
        console.log(userInput)
        
    });
};


init();