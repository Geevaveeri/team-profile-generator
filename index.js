const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const writefile = require("./dist/generate-site");

// empty team array
const teamArray = [];

// starts user prompts with Manager
const promptUserManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the team manager's office number?"
        },
        {
            type: "list",
            name: "teamMember",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members."],

        }

    ])
        .then(managerInfo => {
            const { name, id, email, officeNumber, teamMember } = managerInfo;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
            if (teamMember === "Engineer") {
                return promptUserEngineer("Engineer");
            } else if (teamMember === "Intern") {
                return promptUserIntern("Intern");
            } else {
                return teamArray;
            }

        })
};

const promptUserEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the team engineer's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the team engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the team engineer's GitHub?"
        },
        {
            type: "list",
            name: "teamMember",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members."],

        }
    ])
        .then(engineerInfo => {
            const { name, id, email, github, teamMember } = engineerInfo;
            const engineer = new Engineer(name, id, email, github);

            teamArray.push(engineer);
            if (teamMember === "Engineer") {
                return promptUserEngineer("Engineer");
            } else if (teamMember === "Intern") {
                return promptUserIntern("Intern");
            } else {
                return teamArray;
            }
        })
};

const promptUserIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the team intern's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the team intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the team intern's school?"
        },
        {
            type: "list",
            name: "teamMember",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members."],

        }
    ])
        .then(internInfo => {
            const { name, id, email, school, teamMember } = internInfo;
            const intern = new Intern(name, id, email, school);

            teamArray.push(intern);
            if (teamMember === "Engineer") {
                return promptUserEngineer("Engineer");
            } else if (teamMember === "Intern") {
                return promptUserIntern("Intern");
            } else {
                return teamArray;
            }
        })
}

function init() {
    promptUserManager()
        .then(teamArray => {
            return generatePage(teamArray);
        })
        .then(pageHTML => {
            return writefile(pageHTML);
        })
        .then(writefileResponse => {
            console.log(writefileResponse.message);
        })
        .catch(err => {
            console.log(err);
        })
}
init();
