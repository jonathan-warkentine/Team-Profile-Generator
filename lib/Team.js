// I M P O R T S
// Node Native Packages
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const cheerio = require('cheerio'); // requires `npm i cheerio`

// Local Modules
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

const { prompts } = require('../src/prompts'); //using the curly braces allows us to refer to the const prompts as an array of objects rather than an object that contains an array of objects




// M A I N    C L A S S
class Team {
    constructor(){
        this.members = [];
    }

    // main function that recursively prompts for info about
    // members until all members have been entered
    build(){ 
        console.log(`${"\n"}Let's build your team! ${chalk.bold.green(`Team member #${this.members.length+1}`)}`);
        
        inquirer
        .prompt(prompts)
        .then(answers => {
            this.addMember(answers);
            answers.more? this.build(): this.assembleHTML();
        });
    }

    addMember(answers){
        switch (answers.role) {
            case 'Engineer':
                this.members.push(new Engineer (answers.name, this.members.length+1, answers.email, answers.github));
                break;
            case 'Intern':
                this.members.push(new Intern (answers.name, this.members.length+1, answers.email, answers.school));
                break;
            case 'Manager':
                this.members.push(new Manager (answers.name, this.members.length+1, answers.email, answers.officeNumber));
                break;                     
        }
    }

    htmlCardCreate(member){

        let special;
        switch (member.getRole()) { //returns the class of member to match below
            case 'Engineer':
                special = `<a class="card-text font-italic" href="https://www.github.com/${member.github}">GitHub: ${member.github}</a>`;
                break;
            case "Intern":
                special = `<p class="card-text font-italic">School: ${member.school}</p>`;
                break;
            case "Manager":
                special = `<p class="card-text font-italic">Office Number: ${member.officeNumber}</p>`;
                break;                     
        }
        
        
        return `
        <div class="card m-3" style="width: 18rem;">
            <div class="card-header">
                <h4>${member.getName()}</h4>
            </div>
            <div class="card-body">
                <h5 class="card-title">${member.getRole()}</h5>
                <p class="card-text">ID: ${member.getId()}</p>
                
                ${special}

                <a class="card-text" href="mailto:${member.getEmail()}">${member.getEmail()}</a>
            </div>
        </div>
        `
    }

    assembleHTML(){
        const HTML = fs.readFileSync('./src/HTML/pageTemplate.html', 'utf-8');
        console.log(HTML)
        const $ = cheerio.load(HTML); 

        this.members.forEach(member => $('#cards').append(this.htmlCardCreate(member)));
    
        fs.writeFile('./dist/index.html', $.root().html(), error => {
            error? console.log(error): console.log("\nYour team's webpage is now available in the dist folder!");
        });
    }


    
}

module.exports = Team; //export for use in our index.js file