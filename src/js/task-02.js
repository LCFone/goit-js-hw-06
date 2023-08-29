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

// створюю фрагмент для зберігання всіх елементів li
const fragment = document.createDocumentFragment();

// цикл для сворення та додавання елементу li до списку
ingredients.forEach((ingredient) => {
  // створюю новий елемент lі
const listItem = document.createElement('li');

// додаю нащву інгредієнта до li
listItem.textContent = ingredient;

// додаю клас item до елементу li
listItem.classList.add('item');

// додаю створенний lis до списку ul#ingredients
ingredientsList.appendChild(listItem);

});

// додаю елементи у розмітку поза циклом за одну операцію
ingredientsList.appendChild(fragment);