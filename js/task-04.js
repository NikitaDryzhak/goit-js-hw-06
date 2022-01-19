const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const textBlock = document.querySelector('#value');
let counterValue = 0;

const btnMinus = function () {
    counterValue -= 1;
    console.log(counterValue)
    textBlock.innerHTML = counterValue;

}
const btnPlus = function () {
    counterValue += 1;
    console.log(counterValue)
        textBlock.innerHTML = counterValue;

}


decrement.addEventListener('click', btnMinus);
increment.addEventListener('click', btnPlus);
