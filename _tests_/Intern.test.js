const { enumStringBody } = require('@babel/types');
const { it, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

const intern = new Intern("Bob", 4, "bob@bob.com", "Harvard");

describe('Class "Intern"', () => {
    it('Is an instance of class Intern', () => {
        expect(intern).toBeInstanceOf(Intern)
    })

    it('Is an extension of class Employee', () => {
        expect(intern).toBeInstanceOf(Employee)
    })


    it('Creates an object with properties "name", "id", "email", and "school" ', () => {
        expect(intern.name).toEqual("Bob");
        expect(intern.id).toEqual(4);
        expect(intern.email).toEqual("bob@bob.com");
        expect(intern.school).toEqual("Harvard");
    })

    it('Role is callable via the getRole() method', () => {
        expect(intern.getSchool()).toBe('Harvard');
        expect(intern.getRole()).toBe('Intern');
    })
});