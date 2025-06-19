let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function () {
    let desplazamiento = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamiento) {
        document.getElementById("navbar").style.top = "0px";
    }
    else {
        document.getElementById("navbar").style.top = "-250px";
    }
    ubicacionPrincipal = desplazamiento;
}