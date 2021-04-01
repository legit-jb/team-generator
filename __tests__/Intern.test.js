const Intern = require ("../lib/Intern");

test ("Create an instance of the Intern object", () => {
    const intern = new Intern ("J Brennan", "42", "jbrennan@work.com", "UPenn");

    expect (intern.name).toBe("J Brennan");
    expect (intern.id).toBe ("42");
    expect (intern.email).toBe ("jbrennan@work.com");
    expect (intern.school).toBe ("UPenn");
});

test("get intern's name", () => {
    const intern = new Intern ("J Brennan", "42", "jbrennan@work.com", "UPenn");

    expect(intern.getName()).toEqual("J Brennan");
});

test("get intern's id", () => {
    const intern = new Intern ("J Brennan", "42", "jbrennan@work.com", "UPenn");

    expect(intern.getId()).toEqual("42");
});

test("get intern's email", () => {
    const intern = new Intern ("J Brennan", "42", "jbrennan@work.com", "UPenn");

    expect(intern.getEmail()).toEqual("jbrennan@work.com");
});

test("get intern's school", () => {
    const intern = new Intern ("J Brennan", "42", "jbrennan@work.com", "UPenn");

    expect(intern.getSchool()).toEqual("UPenn");
});

test("get intern's role", () => {
    const intern = new Intern ("J Brennan", "42", "jbrennan@work.com", "UPenn");

    expect(intern.getRole()).toEqual("Intern");
});