const { assertNewExpression } = require("@babel/types");

exports.prompts = [
    {
        name: 'name',
        type: 'input',
        message: 'What is the name of your team member?',
    },
    {
        name: 'role',
        type: 'list',
        message: 'What role does your team member play?',
        choices: ['Engineer', 'Intern', 'Manager']
    },
    {
        name: 'email',
        type: 'input',
        message: "What is your team member's email address?",
    },
    {
        when: answers => answers.role === 'Engineer',
        name: 'github',
        type: 'input',
        message: "What is your engineer's GitHub?"
    },
    {
        when: answers => answers.role === 'Intern',
        name: 'school',
        type: 'input',
        message: "Where is your intern going to school?"
    },
    {
        when: answers => answers.role === 'Manager',
        name: 'officeNumber',
        type: 'input',
        message: "What is your manager's office number?"
    },
    {
        name: 'more',
        type: 'confirm',
        message: 'Do you have another team member to input?'
    }
]