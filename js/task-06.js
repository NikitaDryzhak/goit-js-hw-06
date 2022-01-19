const inputElement = document.querySelector('#validation-input');
inputElement.addEventListener('blur', blurInput);

function blurInput(event) {
    if (event.currentTarget.value.length == inputElement.dataset.length
){        
      event.currentTarget.classList.remove('invalid');
      event.currentTarget.classList.add('valid');
    } else
    {
      event.currentTarget.classList.remove('valid');
      event.currentTarget.classList.add('invalid');
   }
}
