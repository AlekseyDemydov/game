document.getElementById('soundButton').addEventListener('click', function() {
    const soundOn = document.getElementById('soundOn');
    const soundOff = document.getElementById('soundOff');

    // Перемикаємо видимість зображень
    if (soundOn.style.display === 'block') {
        soundOn.style.display = 'none';
        soundOff.style.display = 'block';
    } else {
        soundOn.style.display = 'block';
        soundOff.style.display = 'none';
    }
});