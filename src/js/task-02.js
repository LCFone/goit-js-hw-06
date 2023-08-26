// поблю посилання на список для ul#ingridients
const ingredientsList = document.querySelector('#ingredients');

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// цикл для сворення та додавання елементу li до списку
ingredients.forEach((ingredient) => {
  // створюю новий елемент ls
const listItem = document.createElement('li');

// додаю нащву інгредієнта до li
listItem.textContent = ingredient;

// додаю клас item до елементу li
listItem.classList.add('item');

// додаю створенний lis до списку ul#ingredients
ingredientsList.appendChild(listItem);

});