const Intern = require('../lib/Intern');
const intern = new Intern('John', '2121', 'john@email.com', 'KU');

test('test to see if constructor values for (Intern object', () => {
    expect (intern.name).toBe('John');
    expect (intern.id).toBe('2121');
    expect (intern.email).toBe('john@email.com');
    expect (intern.school).toBe('KU');
});

test('test to see if we get name from the getName method', () => {
    expect (intern.getName()).toBe('John');
});

test('test to see if we get Id from the getId method', () => {
    expect (intern.getId()).toBe('2121');
});

test('test to see if we get email from the getEmail method', () => {
    expect (intern.getEmail()).toBe('john@email.com');
});

test('test to see if we get github from getGithub method', () => {
    expect (intern.getSchool()).toBe('KU');
});