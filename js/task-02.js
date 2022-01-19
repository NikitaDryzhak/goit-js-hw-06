const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
const list = document.querySelector('#ingredients')
  let arrayLi = [];


for (let ingredient of ingredients) {
  let element = document.createElement('li');
  element.classList.add('item');
  element.textContent = ingredient;
  arrayLi.push(element);
}
list.append(...arrayLi)