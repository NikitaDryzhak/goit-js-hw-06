const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
const list = document.querySelector('#ingredients')

const listEl = ingredients.map(ingredient => {
  let elements = document.createElement('li');
  elements.classList.add('item');
  elements.textContent = ingredient;
  console.log(elements)
  return elements;
})
list.append(...listEl)