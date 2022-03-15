const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Team = require('../lib/Team');


describe('Class Team', () => {
    
    // describe('The build() method', () => {
    //     it('')
    // })

    describe('The addMember() method', () => {

        answers = {
            name: "Bob",
            email: "bob@bob.com",
            github: "bob-github",
            role: "Engineer"
        };
        
        it('adds an object of class Engineer, Intern, or Manager (subclass of Class Employee) to the "members" property', () => {
            const team = new Team ();
            
            expect(team.members.length).toBe(0);
            team.addMember(answers);
            expect(team.members.length).toBe(1);
            expect(team.members[0]).toBeInstanceOf(Employee);
            expect(team.members[0]).toBeInstanceOf(Engineer);
        
        });

        it('Does not return anything', () => {
            const team = new Team ();
            expect(team.addMember(answers)).toBe(undefined);
        });
    });

    // describe('The htmlCreateCard method')
});