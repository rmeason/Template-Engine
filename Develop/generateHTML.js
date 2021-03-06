function generateHTML(input) {
    console.log(input)
    return `<!DOCTYPE html>
        <html lang="en">
    
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
            <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            </link>
            <title>Document</title>
    
            <style>

                .card-body {
                    background-color: rgb(218, 203, 184);
                }
                .card-header {
                    background-color: aquamarine;
                }
                .list-group-item {
                    background-color: aqua;
                }
                .mb-4, .my-4 {
                    margin-bottom: 0rem!important;
                }

            </style>
        </head>
    
        <body>
    
            <div class="wrapper">
                <div class="card text-center">
                    <div class="card-header card border-dark mb-4">
                        <h5>My Team</h5>
                    </div>
                    <div class="card-body">
    
                        <div class="row row-cols-1 row-cols-md-3">
                            <div class="col mb-4">
                                <div class="card border-dark mb-4" style="width: 19rem;">
                                    <div class="card-header">
                                        <h5>${input.nameManager}</h5>
                                        <h5><i class="fas fa-tasks"></i>Manager</h5>
                                    </div>
                                    <div class="card-body text-dark">
                                        <div class="card" style="width: 16rem;">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item" style="text-align:center"><strong>ID: </strong>${input.idManager ?input.idManager : " "}</li>
                                                <li class="list-group-item" style="text-align:center"><strong>Email: </strong>${input.emailManager ? input.emailManager : " "}</li>
                                                <li class="list-group-item" style="text-align:center"><strong>Office: </strong>${input.officeManager? input.officeManager : " "}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="col mb-4">
                                <div class="card border-dark mb-4" style="width: 19rem;">
                                    <div class="card-header">
                                        <h5>${input.nameEngineer1}</h5>
                                        <h5><i class="fas fa-ruler-combined"></i>Engineer</h5>
                                    </div>
                                    <div class="card-body text-dark">
                                        <div class="card" style="width: 16rem;">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item" style="text-align:center"><strong>ID: </strong>${input.idEngineer1}</li>
                                                <li class="list-group-item" style="text-align:center"><strong>Email: </strong>${input.emailEngineer1}</li>
                                                <li class="list-group-item" style="text-align:center"><strong>Github: </strong>${input.githubEngineer1}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="col mb-4">
                                <div class="card border-dark mb-4" style="width: 19rem;">
                                    <div class="card-header">
                                        <h5>${input.nameEngineer2}</h5>
                                        <h5><i class="fas fa-ruler-combined"></i>Engineer</h5>
                                    </div>
                                    <div class="card-body text-dark">
                                        <div class="card" style="width: 16rem;">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item" style="text-align:center"><strong>ID: </strong>${input.idEngineer2}</li>
                                                <li class="list-group-item" style="text-align:center"><strong>Email: </strong>${input.emailEngineer2}</li>
                                                <li class="list-group-item" style="text-align:center"><strong>Github: </strong>${input.githubEngineer2}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col mb-4">
                                <div class="card border-dark mb-4" style="width: 19rem;">
                                    <div class="card-header">
                                        <h5>${input.nameIntern}</h5>
                                        <h5><<i class="fas fa-graduation-cap"></i>Intern</h5>
                                    </div>
                                    <div class="card-body text-dark">
                                        <div class="card" style="width: 16rem;">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item" style="text-align:center"><strong>ID: </strong>${input.idIntern}</li>
                                                <li class="list-group-item" style="text-align:center"><strong>Email: </strong>${input.emailIntern}</li>
                                                <li class="list-group-item" style="text-align:center"><strong>Lindkedin: </strong>${input.linkedinIntern}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
                integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
                crossorigin="anonymous"></script>
        </body>
    
        </html>`;
}

    
        module.exports = generateHTML