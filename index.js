//local libraries
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const prompts = require('./src/prompts')

//node native packages
const fs = require('fs');
const inquirer = require('inquirer');

init = () => {
    inquirer.prompt(prompts).then(answers => console.log(answers));
}

