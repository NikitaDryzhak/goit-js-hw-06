const slider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

slider.addEventListener('input', inputChange);
text.style.fontSize =  `${slider.value}px`

function inputChange() {
    text.style.fontSize =  `${slider.value}px`
}
