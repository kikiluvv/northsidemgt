let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
myID = document.getElementById("stt");


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

var scrollFunc = function () {
    var y = window.scrollY;
    if (y >= 20) {
        stt.className = "stt show"
    } else {
        myID.className = "stt hide"
    }
};

window.addEventListener("scroll", scrollFunc);