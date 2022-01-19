function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorNameString = document.querySelector('.color')
const btnChangeColor = document.querySelector('.change-color')

btnChangeColor.addEventListener('click', colorChange)
btnChangeColor.addEventListener('click', colorName)

function colorChange() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function colorName() {
  colorNameString.textContent = getRandomHexColor();
}





