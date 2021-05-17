const { expect, test } = require("@jest/globals");
const Manager = require("../lib/Manager.js");

test("creates an manager object", () => {
    const manager = new Manager("Casey", 10, "email", 1014);

    expect(manager.name).toBe("Casey");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("can we get a name with getName()", () => {
    const name = "Casey";

    const manager = new Manager(name);
    expect(manager.getName()).toBe(name);
});

test("can we get an ID from getId()", () => {
    const id = 10;

    const manager = new Manager("foo", id);
    expect(manager.getId()).toEqual(expect.any(Number));
});

test("can we get an email from getEmail()", () => {
    const email = "email";

    const manager = new Manager("foo", "bar", "email");
    expect(manager.getEmail()).toBe(email);
});

test("can we get a role from getRole()", () => {
    const manager = new Manager("Casey", 10, "email");

    expect(manager.getRole()).toEqual(expect.any(String));
});

test("can we get an office number from getOfficeNumber()", () => {
    const manager = new Manager("Casey", 10, "email", 1014);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});