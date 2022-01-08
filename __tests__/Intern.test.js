const Intern = require('../lib/Intern');
test('creates an Intern object', () => {
    const intern = new Intern('Alex', 47, 'alex@gmail', 'SADV');
        expect(intern.school) .toEqual(expect.any(String));
});
test('gets employee school', () => {
    const intern = new Intern('Alex', 47, 'alex@gmail', 'SADV');
        expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
test('gets role of employee', () => {
    const intern = new Intern('Alex', 47, 'alex@gmail.com', 'SADV');
    expect(intern.getRole()).toEqual("Intern");
}); 