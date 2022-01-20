function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorNameString = document.querySelector('.color')
const btnChangeColor = document.querySelector('.change-color')

btnChangeColor.addEventListener('click', colorChange)
function colorChange() {
  const color = getRandomHexColor()
  document.body.style.backgroundColor = color;
  colorNameString.textContent = color;
}





