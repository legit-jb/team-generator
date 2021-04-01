const Engineer = require("../lib/Engineer");

test ("create an instance of the Engineer object", () =>{
    const engineer = new Engineer ("J Brennan", "42", "jbrennan@work.com", "legitJB");

    expect (engineer.name).toBe ("J Brennan");
    expect (engineer.id).toBe ("42");
    expect (engineer.email).toBe ("jbrennan@work.com");
    expect (engineer.github).toBe ("legitJB"); 
});

test("get engineer's name", () => {
    const engineer = new Engineer ("J Brennan", "42", "jbrennan@work.com", "legitJB");

    expect(engineer.getName()).toEqual("J Brennan");
});

test("get engineer's id", () => {
    const engineer = new Engineer ("J Brennan", "42", "jbrennan@work.com", "legitJB");

    expect(engineer.getId()).toEqual("42");
});

test("get engineer's email", () => {
    const engineer = new Engineer ("J Brennan", "42", "jbrennan@work.com", "legitJB");

    expect(engineer.getEmail()).toEqual("jbrennan@work.com");
});

test("get engineer's github username", () => {
    const engineer = new Engineer ("J Brennan", "42", "jbrennan@work.com", "legitJB");

    expect(engineer.getGithub()).toEqual("legitJB");
});

test("get engineer's role", () => {
    const engineer = new Engineer ("J Brennan", "42", "jbrennan@work.com", "legitJB");

    expect(engineer.getRole()).toEqual("Engineer");
});