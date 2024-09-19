window.addEventListener('load', function() {
    const savedState = localStorage.getItem('pageState');

    if (savedState === 'second') {
        document.querySelector('.first').style.display = 'none';
        document.querySelector('.second').style.display = 'flex';
        document.querySelector('.third').style.display = 'none'; // Переконатися, що третя секція не відображається
    } else if (savedState === 'third') {
        document.querySelector('.first').style.display = 'none';
        document.querySelector('.second').style.display = 'none';
        document.querySelector('.third').style.display = 'flex'; // Показати третю секцію
    } else {
        document.querySelector('.first').style.display = 'flex';
        document.querySelector('.second').style.display = 'none';
        document.querySelector('.third').style.display = 'none'; // Переконатися, що третя секція не відображається
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

document.querySelector('.next').addEventListener('click', function() {
    // Сховати елемент .second
    document.querySelector('.second').style.display = 'none';

    // Показати елемент .third
    document.querySelector('.third').style.display = 'flex';

    // Зберегти стан у localStorage
    localStorage.setItem('pageState', 'third');
});