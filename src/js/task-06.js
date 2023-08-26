// створюю посилання на елемент ДОМ
const validationInput = document.querySelector('#validation-input');

// додаю подію блур до інпута
validationInput.addEventListener('blur', function () {
    // отрумую поточне значення
    const inputValue = validationInput.ariaValue;

    // отримаю кількість імпутів у інпуті
    if (inputValue.length === requiredLenght) {
        // при вырный кылькосты символыв добавляю клас "Валыд" ы видялаю "Ынвалыд"
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    }
    else
{
// в іншому випадку- додаю клас "Інвалід" та видаляю "Вілід"
validationInput.classList.add('invalid');
validationInput.classList.remove('valid');
}
});