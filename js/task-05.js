const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', func);

function func() {
    nameOutput.innerHTML = nameInput.value;
    if (nameInput.value === '') {
        nameOutput.innerHTML = 'Anonimous'
    }
};