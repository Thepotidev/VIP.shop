const jumboBtns = document.querySelector('.jumbotron-buttons');
const threshold = 15; // Los botones aparecen después de 20px

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    console.log('Scroll actual:', currentScroll);
    if (currentScroll > threshold) {
        jumboBtns.classList.remove('hide-on-scroll'); // Muestra los botones
    } else {
        jumboBtns.classList.add('hide-on-scroll'); // Esconde los botones
    }
});

// Oculta los botones al cargar la página si el scroll está arriba
if ((window.pageYOffset || document.documentElement.scrollTop) <= threshold) {
    jumboBtns.classList.add('hide-on-scroll');
}