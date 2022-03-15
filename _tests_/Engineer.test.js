const { enumStringBody } = require('@babel/types');
const { it, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

const engineer = new Engineer("Bob", 4, "bob@bob.com", "Bob-GitHub-Username");

describe('Class "Engineer"', () => {
    it('Is an instance of class Engineer', () => {
        expect(engineer).toBeInstanceOf(Engineer)
    })

    it('Is an extension of class Employee', () => {
        expect(engineer).toBeInstanceOf(Employee)
    })


    it('Creates an object with properties "name", "id", "email", and "GitHub" ', () => {
        expect(engineer.name).toEqual("Bob");
        expect(engineer.id).toEqual(4);
        expect(engineer.email).toEqual("bob@bob.com");
        expect(engineer.github).toEqual("Bob-GitHub-Username");
    })

    it('GitHub and Role are callable via the getGithub() and getRole() methods', () => {
        expect(engineer.getGithub()).toBe(engineer.github);
        expect(engineer.getRole()).toBe('Engineer');
    })
});

