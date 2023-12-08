let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

setInterval(function () {
    currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}, 3000);

function updateCarousel() {
    const newTransformValue = -100 * currentIndex + '%';
    document.querySelector('.carousel-inner').style.transform = 'translateX(' + newTransformValue + ')';
}