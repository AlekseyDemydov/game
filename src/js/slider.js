document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    function showSlide(index) {
        // Перевірка коректності індексу слайду
        if (index >= slideCount) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slideCount - 1;
        } else {
            currentIndex = index;
        }
        slides.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    document.querySelector('.nextslide').addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });

    document.querySelector('.prevslide').addEventListener('click', function() {
        showSlide(currentIndex - 1);
    });

    // Додати підтримку гортання пальцем
    let startX;
    slides.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });

    slides.addEventListener('touchend', function(e) {
        const endX = e.changedTouches[0].clientX;
        if (startX > endX + 50) {
            showSlide(currentIndex + 1); // Гортання вліво
        } else if (startX < endX - 50) {
            showSlide(currentIndex - 1); // Гортання вправо
        }
    });
});