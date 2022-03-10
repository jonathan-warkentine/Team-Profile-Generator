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
        name: 'GitHub',
        type: 'input',
        message: "What is your team member's GitHub?"
    },
    {
        name: 'more',
        type: 'confirm',
        message: 'Do you have another team member to input?'
    }
]