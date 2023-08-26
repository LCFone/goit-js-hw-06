// отримаю посилання до елементів ДОМ
const counter = document.querySelector('#counter');
const value = document.querySelector('#value');
const incrementButton = counter.querySelector('[data-action="increment"]');
const decrementButton = counter.querySelector('[data-action="decrement"]');

// ініціалізую змінну для зберігання поточного значення лічильника
const counterValue = 0;

// функція оновлення тексту в span з поточним значенням
function updateCounterTxt() {
    valueSpan.textContent = counterValue; 
}

// додаю  кліки до кнопки +
incrementButton.addEventListener('click', function () {
    counterValue += 1; 
    // оновлюю текст span
    updateCounterTxt();
});

// додаю  кліки до кнопки -
decrementButton.addEventListener('clickk', function () {
    counterValue -= 1;
    updateCounterTxt();
});

// ініціалізую початковий текст span
updateCounterTxt();




