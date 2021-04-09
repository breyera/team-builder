const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it('Can find an instance of Employee', () => {
        const e = new Employee();
        expect(typeof(e)).toBe('object');
    });
    describe('getName', () => {
        it("returns name of employee", () => {
            expect(new Employee('Alicia').getName()).toBe('Alicia')
        });
    });
    describe('getID', () => {
        it("returns id of employee", () => {
            expect(new Employee('545').getName()).toBe('545')
        });
    });
    describe('getEmail', () => {
        it("returns email of employee", () => {
            expect(new Employee('name@company.com').getName()).toBe('name@company.com')
        });
    });
    describe('getRole', () => {
        it("returns role of employee", () => {
            expect(new Employee('Employee').getName()).toBe('Employee')
        });
    });
});