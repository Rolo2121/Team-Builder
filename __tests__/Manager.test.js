const Manager = require('../lib/Manager');
const manager = new Manager('John', '2121', 'john@email.com', '40');

test('test to see if constructor values for (Manager object', () => {
    expect (manager.name).toBe('John');
    expect (manager.id).toBe('2121');
    expect (manager.email).toBe('john@email.com');
    expect (manager.number).toBe('40');
});

test('test to see if we get name from the getName method', () => {
    expect (manager.getName()).toBe('John');
});

test('test to see if we get Id from the getId method', () => {
    expect (manager.getId()).toBe('2121');
});

test('test to see if we get email from the getEmail method', () => {
    expect (manager.getEmail()).toBe('john@email.com');
});

test('test to see if we get github from getGithub method', () => {
    expect (manager.getNumber()).toBe('40');
});