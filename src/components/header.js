function header() {
    document.body.appendChild(document.createElement('header'));
    document.querySelector("body header:last-child").className = "header";
    // document.querySelector(".header").innerHTML = "<div id='menu'>" +
    //     "<div class='row'>" +
    //     "<div class='col'>" +
    //     "<p class='texto'>CAMP.GG</p>" +
    //     "</div>" +
    //     "<div class='btn-toolbar' role='toolbar' aria-label='Toolbar with button groups'>" +
    //     "<div class='btn-group me-2' role='group' aria-label='First group'>" +
    //     "<a href='#'><button type='button' class='btn btn-danger'>Criarconta</button></a>" +
    //     "</div>" +
    //     "<div class='btn-group me-2' role='group' aria-label='Second group'>" +
    //     "<a href='#'><button type='button' class='btn btn-danger'>Login</button></a>" +
    //     "</div>" +
    //     "</div>" +
    //     "</div>" +
    //     "</div>"


    document.querySelector(".header").innerHTML = "<div class='mainContainer'>" +

        "<nav class='navbar navbar-expand-lg navbar-light bg-light'>" +
        "<div class='container-fluid bg-danger '>" +

        "<a class='navbar-brand logo' href='#'>CAMP.GG</a>" +


        "<div class='d-flex'>" +
        "<a href='cadastro.html'><button type='button' class='btn btn-danger'>Criar conta</button></a>" +
        "<button type='button' class='btn btn-danger'>Login</button>" +
        "</div>" +


        "</div>" +
        "</nav>" +
        "</div>"
}


