const Engineer = require('../lib/Engineer');
const engineer = new Engineer('John', '2121', 'john@email.com', 'Rolo2121');

test('test to see if constructor values for (Engineer object', () => {
    expect (engineer.name).toBe('John');
    expect (engineer.id).toBe('2121');
    expect (engineer.email).toBe('john@email.com');
    expect (engineer.github).toBe('Rolo2121');
});

test('test to see if we get name from the getName method', () => {
    expect (engineer.getName()).toBe('John');
});

test('test to see if we get Id from the getId method', () => {
    expect (engineer.getId()).toBe('2121');
});

test('test to see if we get email from the getEmail method', () => {
    expect (engineer.getEmail()).toBe('john@email.com');
});

test('test to see if we get github from getGithub method', () => {
    expect (engineer.getGithub()).toBe('Rolo2121');
});