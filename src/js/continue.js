// При завантаженні сторінки
window.addEventListener('load', function() {
    const savedState = localStorage.getItem('pageState');

    if (savedState === 'second') {
        document.querySelector('.first').style.display = 'none';
        document.querySelector('.second').style.display = 'flex';
    } else {
        document.querySelector('.first').style.display = 'flex';
        document.querySelector('.second').style.display = 'none';
    }
});

document.querySelector('.continue').addEventListener('click', function() {
    // Сховати елемент .first
    document.querySelector('.first').style.display = 'none';

    // Показати елемент .second
    document.querySelector('.second').style.display = 'flex';

    // Зберегти стан у localStorage
    localStorage.setItem('pageState', 'second');
});

document.querySelector('.no').addEventListener('click', function() {
    // Сховати елемент .second
    document.querySelector('.second').style.display = 'none';

    // Показати елемент .first
    document.querySelector('.first').style.display = 'flex';

    // Зберегти стан у localStorage
    localStorage.setItem('pageState', 'first');
});