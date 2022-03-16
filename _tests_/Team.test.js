const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Team = require('../lib/Team');

const fs = require("fs");
jest.mock("fs");


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

    describe('The htmlCreateCard() method', () => {
        it('Returns a string of HTML', () => {
            const team = new Team ();
            
            answers = {
                name: "Bob",
                email: "bob@bob.com",
                github: "bob-github",
                role: "Engineer"
            };

            team.addMember(answers);

            expect(team.htmlCardCreate(team.members[0])).toContain('</div>')
        })
    })

    describe('method assembleHTML()', () => {
        
        it('calls the fs.readFile method', () => {
            fs.readFileSync.mockReturnValue("Hello World!");

            const team = new Team ();
            team.assembleHTML();

            // expect(fs.readFileSync).toHaveBeenCalledWith('./src/HTML/pageTemplate.html', 'utf-8');
            expect(fs.readFileSync).toHaveBeenCalled();
            expect(fs.writeFile).toHaveBeenCalled();
        })
        
    })

    describe('method writeFile(path, data)', () => {
        it('calls the fs.writeFile() method', () => {
            const team = new Team ();
            team.save();

            expect(fs.writeFile).toHaveBeenCalled();
        })
    })
});