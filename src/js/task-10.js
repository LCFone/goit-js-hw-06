// функція для генерації випадкового кольору

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// отримую посилання на необхідні елементи ДОМ
const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// додаю обробник події на кнопку "Дестрой"
destroyButton.addEventListener('click', destroyBoxes);

// функція для створення колекції елементів
function createBoxes(amount) {
  const boxSizes = 30;
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    // створюю новий дів елемент
    const box = document.createElement('div');

    // визначаю розмыр елементу (перший 30рх, далы +10рх)
    const size = boxSize + i * 10;
    box.style.width = '${size}px';
    box.style.height = '${size}px';

    // задаю випадковий колір фону
    box.style.backgroundColor = getRandomHexColor();

    // додаю елемент у масив
    boxes.push(box);
  }

  // додаю всі створенні елементи у контейнер 
boxesContainer.append(...boxes);
}

// функція для очишення колекції елементів
function destroyBoxes() {

  // видаляю всі створенні елементи (очищаю вміст контейнера)
  boxesContainer.innerHTML = '';
}
