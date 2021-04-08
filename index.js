const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'index.html');

const render = require('./lib/htmlrender');
// An empty 'teamMem' array to push all employee info
let teamMem = [];

// use inquirer to provide questions for creating employee information
function newEmployee() {
    console.log('Add your team');
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'employee',
          message: 'Which team member would you like to add?',
          choices: [
            'Manager',
            'Engineer',
            'Intern',
            'Done Adding',
          ],
        },
      ])
      .then((answers) => {
        switch (answers.employee) {
          case 'Manager':
            newManager();
            break;
          case 'Engineer':
            newEngineer();
            break;
          case 'Intern':
            newIntern();
            break;
          case 'Done Adding':
            render(teamMem);
            generateHtml();
        }
      });
  }
  
  function newManager() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your manager"s name?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is your manager"s ID?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your manager"s email?',
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: 'What is your manager"s office number?',
        },
      ])
  
      .then((answers) => {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        teamMem.push(manager);
        newEmployee();
      });
  }
  
  function newEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your engineer"s name?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is your engineer"s ID?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your engineer"s email?',
        },
        {
          type: 'input',
          name: 'github',
          message: 'What is your engineer"s Github username?',
        },
      ])
  
      .then((answers) => {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );
        teamMem.push(engineer);
        newEmployee();
      });
  }
  
  function newIntern() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your intern"s name?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is your intern"s ID?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your intern"s email?',
        },
        {
          type: 'input',
          name: 'school',
          message: 'What school does your intern attend?',
        },
      ])
  
      .then((answers) => {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        teamMem.push(intern);
        newEmployee();
      });
  }
  
  function generateHtml() {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFile(distPath, render(teamMem), function (err) {
      if (err) throw err;
      console.log(
        'Your HTML has been generated and loaded into the dist folder!'
      );
    });
  }
  
  newEmployee();

