function header() {
    document.body.appendChild(document.createElement('header'));
    document.querySelector("body header:last-child").className = "header";
    document.querySelector(".header").innerHTML = 'LOGO';
}
