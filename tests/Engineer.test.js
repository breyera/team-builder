// const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    it('Can set Github account via constructor', () => {
        const e = new Engineer('Alicia', 'name@company.com', '545', 'Github');
        expect(e.github).toBe('Github');
    });
    describe('getRole', () => {
        it("returns role of Engineer", () => {
            expect(new Engineer('Engineer').getName()).toBe('Engineer')
        });
    });
    describe('getGithub', () => {
        it("returns github username", () => {
            expect(new Engineer('Alicia', 'name@company.com', '545', 'Github').getGithub()).toBe('Github')
        });
    });
})