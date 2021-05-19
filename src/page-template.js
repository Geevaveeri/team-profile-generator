// create the manager card

const generateManagerCard = employeeArr => {
    return `
    <div class="col">
            <div class="card h-100 bg-success text-center">
                <div class="card-header">
                    ${employeeArr}
                    <br>
                    Manager
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID</li>
                    <li class="list-group-item">Email</li>
                    <li class="list-group-item">Office #</li>
                </ul>
            </div>
        </div>
        `;
};

module.exports = templateData => {
    const { manager, engineer, intern } = templateData;

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
</head>

<body>
    <nav class="navbar navbar-light bg-success bg-gradient mb-3">
        <div class="container-fluid ">
            <span class="navbar-brand mb-0 h1 mx-auto ">My Team</span>
        </div>
    </nav>

    <div class="row row-cols-1 row-cols-md-3 g-4 m-2">

    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossorigin="anonymous"></script>
</body>

</html>
    `;
};