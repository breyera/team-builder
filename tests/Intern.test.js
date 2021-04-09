const Intern = require('../lib/Intern');

describe('Intern class', () => {
    it('Can set school via constructor', () => {
        const e = new Intern('Alicia', '545', 'name@company.com', 'College');
        expect(e.school).toBe('College');
    });
    describe('getRole', () => {
        it("returns role of Intern", () => {
            expect(new Intern('Intern').getName()).toBe('Intern')
        });
    });
    describe('getSchool', () => {
        it("returns college of intern", () => {
            expect(new Intern('Alicia', '545', 'name@company.com', 'College').getSchool()).toBe('College')
        });
    });
});