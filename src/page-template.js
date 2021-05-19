
// put roles into seperate arrays and push then to correct functions, then insert them into page
const generateCards = teamArr => {

    // array for the cards
    employee = [];

    for (let i = 0; i < teamArr.length; i++) {
        const team = teamArr[i];
        const role = team.getRole();

        // send respective employee's to the appropriate card generators
        if (role === "Manager") {
            const manager = generateManagerCard(team);

            employee.push(manager);


        } else if (role === "Engineer") {
            const engineer = generateEngineerCard(team);

            employee.push(engineer);

        } else if (role === "Intern") {
            const intern = generateInternCard(team);

            employee.push(intern);
        }
    }


    const employeeCards = employee.join("");

    return employeeCards;
};
// create the manager card
const generateManagerCard = manager => {
    return `
    <div class="col">
            <div class="card h-100 bg-success text-center gradient-border">
                <div class="card-header">
                    ${manager.name}
                    <br>
                    ${manager.getRole()}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item"><p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p></li>
                    <li class="list-group-item">Office #${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
        `;
};

// create engineer card
const generateEngineerCard = engineer => {
    return `
    <div class="col">
            <div class="card h-100 bg-success text-center gradient-border">
                <div class="card-header">
                    ${engineer.name}
                    <br>
                    ${engineer.getRole()}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item"><p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
        `;

};

const generateInternCard = intern => {
    return `
    <div class="col">
            <div class="card h-100 bg-success text-center gradient-border">
                <div class="card-header">
                    ${intern.name}
                    <br>
                    ${intern.getRole()}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item"><p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
        `;
};

generatePage = teamArr => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="./src/style.css">
</head>

<body>
    <nav class="navbar navbar-light bg-success bg-gradient mb-3">
        <div class="container-fluid ">
            <span class="navbar-brand mb-0 h1 mx-auto ">My Team</span>
        </div>
    </nav>

    <div class="row row-cols-1 row-cols-md-3 g-4 m-2">
    ${generateCards(teamArr)}
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossorigin="anonymous"></script>
</body>

</html>
    `;
};

module.exports = generatePage;