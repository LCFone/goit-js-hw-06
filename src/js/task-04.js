// отримаю посилання до елементів ДОМ
const counter = document.querySelector('#counter');
const valueSpan = document.querySelector('#value');
const incrementButton = counter.querySelector('[data-action="increment"]');
const decrementButton = counter.querySelector('[data-action="decrement"]');

// ініціалізую змінну для зберігання поточного значення лічильника
let counterValue = 0;

// функція оновлення тексту в span з поточним значенням
function updateCounterText() {
    valueSpan.textContent = counterValue;
  }

// додаю  кліки до кнопки +
incrementButton.addEventListener('click', function () {
    counterValue += 1; 
    // оновлюю текст span
    updateCounterText();
});

// додаю  кліки до кнопки -
decrementButton.addEventListener('click', function () {
    counterValue -= 1;
    updateCounterText();
});

// ініціалізую початковий текст span
updateCounterText();




