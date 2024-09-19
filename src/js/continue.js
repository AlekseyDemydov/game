document.addEventListener('DOMContentLoaded', function() {
    // Зберегти стан в історії при зміні секції
    function updatePageState(state) {
        localStorage.setItem('pageState', state);
        history.pushState({ page: state }, '', `#${state}`);
        showPage(state);
    }

    // Показати відповідну секцію в залежності від стану
    function showPage(state) {
        document.querySelector('.first').style.display = 'none';
        document.querySelector('.second').style.display = 'none';
        document.querySelector('.third').style.display = 'none';

        if (state === 'first') {
            document.querySelector('.first').style.display = 'flex';
        } else if (state === 'second') {
            document.querySelector('.second').style.display = 'flex';
        } else if (state === 'third') {
            document.querySelector('.third').style.display = 'flex';
        }
    }

    // Відновлення стану сторінки при завантаженні
    const savedState = localStorage.getItem('pageState') || 'first';
    showPage(savedState);

    // Відновлення стану при натисканні кнопки "Назад" у браузері
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.page) {
            showPage(event.state.page);
        } else {
            showPage('first');
        }
    });

    document.querySelector('.continue').addEventListener('click', function() {
        updatePageState('second');
    });

    document.querySelector('.no').addEventListener('click', function() {
        updatePageState('first');
    });

    document.querySelector('.next').addEventListener('click', function() {
        updatePageState('third');
    });
});