const fontSizeControl = document.querySelector('#fontSizeControl');
const text = document.querySelector('#text');

// встановлюю початковий розмір тексту
text.style.fontSize = '16px';

// обробник події для зміни розмірів тексту при зміні значення інпуту
fontSizeControl.addEventListener('input', function () {
    // отримаю інпут і додаємо px для розміру тексту
    const fontSize = this.value + 'px';
    // встановлюю новий розмір текстц

    text.style.fontSize = fontSize;
});