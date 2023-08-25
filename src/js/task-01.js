// вибираю всі елементи li з класом "item" у батьківському  елементі з id "categories"
const categoriesList = document.querySelectorAll('#categories .item');

// вивожу в консоль кількість знайдених категорій у списку
console.log(`Number of categories: ${categoriesList.length}`);

// для кожної категорії в списку роблю наступне
categoriesList.forEach(category => {
  // шукаю заголовок категорії, який є першим елементом h2 в поточній категорії
  const categoryName = category.querySelector('h2').textContent;
  // шукаю всі підкатегорії (елементи li) всередині поточної категорії і рахуємо їх кількість
  const categoryElements = category.querySelectorAll('ul li').length;

  // вивожу ім'я категорії та кількість елементів в ній
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
