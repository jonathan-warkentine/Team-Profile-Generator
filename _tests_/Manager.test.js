const { enumStringBody } = require('@babel/types');
const { it, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

const manager = new Manager("Bob", 4, "bob@bob.com", 8);

describe('Class "Manager"', () => {
    it('Is an instance of class Manager', () => {
        expect(manager).toBeInstanceOf(Manager)
    })

    it('Is an extension of class Employee', () => {
        expect(manager).toBeInstanceOf(Employee)
    })


    it('Creates an object with properties "name", "id", "email", and "officeNumber" ', () => {
        expect(manager.name).toEqual("Bob");
        expect(manager.id).toEqual(4);
        expect(manager.email).toEqual("bob@bob.com");
        expect(manager.officeNumber).toEqual(8);
    })

    it('Role is callable via the getRole() method', () => {
        expect(manager.getRole()).toBe('Manager');
    })
});

