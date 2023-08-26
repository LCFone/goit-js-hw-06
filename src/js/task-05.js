// jтримую посилання на елементи ДОМ
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// додаю подію "input" до input
nameInput.addEventListener('input', function () {
    // отримую поточне значення інпуту
    const inputValue = nameInput.value;


// перевірка інпуту на порожність
if (inputValue === "") {
// якщо порожній- встановлюю 'анонімус'
    nameOutput.textContent = 'Anonymous'
}
else {
    // dcnfyjdk.. dvscn sygenf d cgfy
    nameOutput.textContent = inputValue;
}
});
