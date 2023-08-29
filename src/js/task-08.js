// створюю посилання на форму з полями вводу
const loginForm = document.querySelector('.login-form');
const emailInput = loginForm.querySelector('input[name="email"]');
const passwordInput = loginForm.querySelector('input[name="password"]');

// створюю обробник подіїї на відправллення форми
loginForm.addEventListener('submit', function (event) {
    // відключаю перезавантеження сторінки після підтвердження вводу
    event.preventDefault();

    // перевірка полів на заповненість

    if (emailInput.value === '' || passwordInput.value === '') {
        alert('Всі поля повинні бути заповнені');
        return;
    }

    // створюю об'єкт з данними форми
    const formData = {
        email: emailInput.value,
        password: passwordInput.value,
    };

    // dbdj;e lfyys d rjycjkm
    console.log(formData);

    // очищаю значення полів форми методом reset()
    loginForm.reset();
});
