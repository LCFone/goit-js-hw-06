// отримую елемент інпуту
const inputRef = document.querySelector("#validation-input");

// додаю слухача події blur
inputRef.addEventListener("blur", (event) => {

  // перевіряю відповідність кількості символів у введеному тексті
  if (Number(event.target.dataset.length) === event.target.value.length) {

    // якщо все вірно, то додаю клас valid і видаляю клас invalid
    addOrRemoveClassList("valid", "invalid");

  } else if (!event.target.value.length) {
    // якщо елемент інпут не містить жодного символу, то видаляєю обидва класи

    removeAllClassList("invalid", "valid");
  } else {

    // якщо кількість символів у тексті не відповідає потрібному, то додаю клас invalid
    addOrRemoveClassList("invalid", "valid");
  }
});

// функція додає клас add і видаляє клас remove з інпуту
function addOrRemoveClassList(add, remove) {

  // додаю клас add до елемента інпуту
  inputRef.classList.add(add);

  // видаляю клас remove з інпуту
  inputRef.classList.remove(remove);
}

// функція видаляє класи два класи з інпуту
function removeAllClassList(classOne, classTwo) {

  // видаляю обидва класи з інпуту
  inputRef.classList.remove(classOne, classTwo);
}