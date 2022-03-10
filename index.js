//local libraries
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const { prompts } = require('./src/prompts'); //using the curly braces allows us to refer to the const prompts as an array of objects rather than an object that contains an array of objects
const htmlCardCreate = require('./src/htmlCardCreate');
const assembleHTML = require('./src/assembleHTML');

//node native packages
const fs = require('fs');
const inquirer = require('inquirer');


init = () => {
    let employeeCards = [];
    inquire();
    assembleHTML(employeeCards);

    function inquire () {
        inquirer
        .prompt(prompts)
        .then(answers => {
            employeeCards.push(htmlCardCreate(answers, employeeCards.length+1));
            answers.more? inquire(): fs.writeFile('./dist/index.html', assembleHTML(employeeCards), error => console.log(error));
        });
    }
}

init();

