const Employee = require('../lib/Employee');
const employee = new Employee('John', '2121', 'john@email.com');

test('test to see if constructor values for employee object', () => {
    expect(employee.name).toBe('John');
    expect(employee.id).toBe('2121');
    expect(employee.email).toBe('john@email.com');
});

test('test to see if we get name from the getName method', () => {
    expect(employee.getName()).toBe('John');
});

test('test to see if we get Id from the getId method', () => {
    expect(employee.getId()).toBe('2121');
})

test('test to see if we get email from the getEmail method', () => {
    expect(employee.getEmail()).toBe('john@email.com')
});