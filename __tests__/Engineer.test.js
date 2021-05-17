const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("creates an Engineer object", () => {
    const engineer = new Engineer("Casey", 10, "email", "Geevaveeri");

    expect(engineer.name).toBe("Casey");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test("can we get a name with getName()", () => {
    const name = "Casey";

    const engineer = new Engineer(name);
    expect(engineer.getName()).toBe(name);
});

test("can we get an ID from getId()", () => {
    const id = 10;

    const engineer = new Engineer("foo", id);
    expect(engineer.getId()).toEqual(expect.any(Number));
});

test("can we get an email from getEmail()", () => {
    const email = "email";

    const engineer = new Engineer("foo", "bar", "email");
    expect(engineer.getEmail()).toBe(email);
});

test("can we get a role from getRole()", () => {
    const engineer = new Engineer("Casey", 10, "email");

    expect(engineer.getRole()).toEqual(expect.any(String));
});

test("can we get the github from getGithub()", () => {
    const github = "geevaveeri";

    const engineer = new Engineer("Casey", 10, "email", github);
    expect(engineer.getGithub()).toEqual(expect.any(String));
});