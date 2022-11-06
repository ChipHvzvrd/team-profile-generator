const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('id');

    expect(employee.id).toBe('id');
    expect(employee.value).toEqual(expect.any(Number));
});