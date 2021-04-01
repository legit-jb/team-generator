const Employee = require ("../lib/Employee");

test ("Create an instance of the Employee object", () => {
    const employee = new Employee ("J Brennan", "42", "jbrennan@work.com");

    expect (employee.name).toBe("J Brennan");
    expect (employee.id).toBe ("42");
    expect (employee.email).toBe ("jbrennan@work.com")
});
// end test employee object

test("get employee's name", () => {
    const employee = new Employee ("J Brennan", "42", "jbrennan@work.com");

    expect(employee.getName()).toEqual("J Brennan");
});

test("get employee's id", () => {
    const employee = new Employee ("J Brennan", "42", "jbrennan@work.com");

    expect(employee.getId()).toEqual("42");
});

test("get employee's email", () => {
    const employee = new Employee ("J Brennan", "42", "jbrennan@work.com");

    expect(employee.getEmail()).toEqual("jbrennan@work.com");
});

test("get employee's role", () => {
    const employee = new Employee ("J Brennan", "42", "jbrennan@work.com");

    expect(employee.getRole()).toEqual("Employee");
});
