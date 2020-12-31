/*----------------------------------
    SCROLL DE LINKS smoothScroll
---------------------------------*/
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 800,
	speedAsDuration: true
});


/*---------------------------------
    OCULTAR Y MOSTRAR BOTON IR ARRIBA
 ----------------------------------*/
function toggleUpArrow(){
    var upArrow = document.querySelector(".ir-arriba");

    if(window.pageYOffset >= 50) {
        upArrow.classList.add("fadeIn");
        upArrow.classList.remove("fadeOut");
        upArrow.setAttribute("style","display: inline");
    } else {
        // upArrow.setAttribute("style","display: none");  //No es necesario
        upArrow.classList.add("fadeOut");
        upArrow.classList.remove("fadeIn");
    }
}


/*---------------------------------
   CABECERA ANIMADA
 ----------------------------------*/
function animateNavbar(){
    var navbar = document.querySelector(".encabezado");
    // var nav = document.getElementById("encabezado"); // Otra forma

    if(window.pageYOffset >= 80) {
        navbar.classList.add("fondo-menu");
    } else {
        navbar.classList.remove("fondo-menu");
    }
}


/*---------------------------------
   CLOSE MENU COLLAPSABLE - Bootstrap v4.5.3 - v5
 ----------------------------------*/
function collapseMenu(){
    var btnMenu = document.querySelector(".boton-menu");
    var mainMenu = document.getElementById('menu-principal');

    if ( btnMenu.getAttribute("aria-expanded") === "true" ) {
        new bootstrap.Collapse( mainMenu, { toggle: true } )
    }
}

/*---------------------------------
   ON-SCROLLING
 ----------------------------------*/
function onScroll() {
    animateNavbar();
    toggleUpArrow();
    collapseMenu();
}

window.onscroll = onScroll ;

/*---------------------------------
   WOW
 ----------------------------------*/
new WOW().init();