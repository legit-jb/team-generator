const Manager = require ("../lib/Manager");

test ("Create an instance of the Manager object", () => {
    const manager = new Manager ("J Brennan", "42", "jbrennan@work.com", "314");

    expect (manager.name).toBe("J Brennan");
    expect (manager.id).toBe ("42");
    expect (manager.email).toBe ("jbrennan@work.com");
    expect (manager.officeNumber).toBe ("314");
});

test("get manager's name", () => {
    const manager = new Manager ("J Brennan", "42", "jbrennan@work.com", "314");

    expect(manager.getName()).toEqual("J Brennan");
});

test("get manager's id", () => {
    const manager = new Manager ("J Brennan", "42", "jbrennan@work.com", "314");

    expect(manager.getId()).toEqual("42");
});

test("get manager's email", () => {
    const manager = new Manager ("J Brennan", "42", "jbrennan@work.com", "314");

    expect(manager.getEmail()).toEqual("jbrennan@work.com");
});

test("get manager's github username", () => {
    const manager = new Manager ("J Brennan", "42", "jbrennan@work.com", "314");

    expect(manager.getOfficeNumber()).toEqual("314");
});

test("get manager's role", () => {
    const manager = new Manager ("J Brennan", "42", "jbrennan@work.com", "314");

    expect(manager.getRole()).toEqual("Manager");
});