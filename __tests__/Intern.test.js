const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
    const intern = new Intern("Casey", 10, "email", "University of Utah");

    expect(intern.name).toBe("Casey");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("can we get a name with getName()", () => {
    const name = "Casey";

    const intern = new Intern(name);
    expect(intern.getName()).toBe(name);
});

test("can we get an ID from getId()", () => {
    const id = 10;

    const intern = new Intern("foo", id);
    expect(intern.getId()).toEqual(expect.any(Number));
});

test("can we get an email from getEmail()", () => {
    const email = "email";

    const intern = new Intern("foo", "bar", "email");
    expect(intern.getEmail()).toBe(email);
});

test("can we get a role from getRole()", () => {
    const intern = new Intern("Casey", 10, "email");

    expect(intern.getRole()).toEqual(expect.any(String));
});

test("can we get a school from getSchool()", () => {
    const intern = new Intern("Casey", 10, "email", "UofU");

    expect(intern.getSchool()).toEqual(expect.any(String));
})