const { it, expect } = require('@jest/globals');
const { describe } = require('yargs');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Team = require('../lib/Team');


// const engineer = new Engineer ("Fred", 1, "fred@freddy.com", "fredstergit");
// const manager = new Manager("Bob", 2, "bob@freddy.com", 4);
// const intern = new Intern("Marvin", 3, "marvin@google.com", "Harvard");

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
        }
        
        it('adds an object of class Engineer, Intern, or Manager (subclass of Class Employee) to the "members" property', () => {
            const team = new Team ();
            
            expect(team.members.length).toBe(0);
            team.addMember(answers);
            expect(team.members.length).toBe(1);
            expect(team.members[0]).toBeInstanceOf(Employee);
            expect(team.members[0]).toBeInstanceOf(Engineer);

            expect(team.members.length).toBe(0);
            team.addMember(answers);
            expect(team.members.length).toBe(1);
            expect(team.members[0]).toBeInstanceOf(Employee);
            expect(team.members[0]).toBeInstanceOf(Engineer);
        })

        it('Does not return anything', () => {
            expect(team.addMember(answers)).toBe(undefined);
        })
    })

    describe('The htmlCreateCard method')
})