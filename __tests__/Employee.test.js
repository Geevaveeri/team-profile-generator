const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("creates an employee object", () => {
    const employee = new Employee("Casey", 10, "email");

    expect(employee.name).toBe("Casey");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("can we get a name with getName()", () => {
    const name = "Casey";

    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test("can we get an ID from getId()", () => {
    const id = 10;

    const employee = new Employee("foo", id);
    expect(employee.getId()).toEqual(expect.any(Number));
});

test("can we get an email from getEmail()", () => {
    const email = "email";

    const employee = new Employee("foo", "bar", "email");
    expect(employee.getEmail()).toBe(email);
});

test("can we get a role from getRole()", () => {
    const employee = new Employee("Casey", 10, "email");

    expect(employee.getRole()).toEqual(expect.any(String));
});
