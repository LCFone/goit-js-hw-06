// функція для генерації випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// посилання на елементи DOM
const body = document.body;
const colorSpan = document.querySelector('.color');
const changeCollorBtn = document.querySelector('.change-color');

// додаю обробник подіїї на клік по кнопці
changeCollorBtn.addEventListener('click', () => {
  
  // генерування випадкового кольору
  const randomColor = getRandomHexColor();

  // зміна фону елемента <body></body на випадковий колір
  body.style.backgroundColor = randomColor;

  // виводжу значення кольору в <span class='color'></span>
  colorSpan.textContent = randomColor;
});