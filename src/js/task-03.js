// масив оёэктыв зображень та альт текстом
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
 
// роблю посилання на список ul.gallery
const galleryList = document.querySelector(`.gallery`);

// розмітка для галереї з шаблонних рядкі
const galleryItems = images.map((image) => {
  return `<li>
    <img src="${image.url}" alt="${image.alt}">
  </li>`;

// об'єднаю всі рядки в один
}).join('');

// Вставляю нову розмітку в список ul.gallery
galleryList.insertAdjacentHTML('beforeend', galleryItems);

