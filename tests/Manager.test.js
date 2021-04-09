const Manager = require('../lib/Manager');

describe('Manager class', () => {
    it('Can set office number via constructor', () => {
        const e = new Manager('Alicia', 'name@company.com', '545', '12345');
        expect(e.officeNumber).toBe('12345');
    });
    describe('getRole', () => {
        it("returns role of Manager", () => {
            expect(new Manager('Manager').getName()).toBe('Manager')
        });
    });
    describe('getOfficeNumber', () => {
        it("returns office number of Manager", () => {
            expect(new Manager('Alicia', 'name@company.com', '545', '12345').getOfficeNumber()).toBe('12345')
        });
    });
});