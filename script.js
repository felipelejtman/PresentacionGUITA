
let actual = 0;
const slides = document.querySelectorAll('.diapositiva');

function mostrarSlide(index) {
    slides[actual].classList.remove('activa');
    actual = (index + slides.length) % slides.length;
    slides[actual].classList.add('activa');
}
function navegar(direccion) {
    mostrarSlide(actual + direccion);
}
