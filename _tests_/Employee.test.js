const { it, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

const employee = new Employee("Bob", 4, "bob@bob.com");

describe('Class "Employee"', () => {
    it('Creates an object of class "Employee"', () => {
        expect(employee).toBeInstanceOf(Employee);
    })
    
    it('Creates an object with properties "name", "id", "email"', () => {
        expect(employee.name).toEqual("Bob");
        expect(employee.id).toEqual(4);
        expect(employee.email).toEqual("bob@bob.com");
    })

    it('Return the string "Employee" when the method .getRole() is called', () => {
        expect(employee.getRole()).toEqual("Employee");
    })
});

