const form = document.querySelector('.login-form');

form.addEventListener('submit', sendForm);
function sendForm(event) {
    event.preventDefault();
    if (form.email.value === '' || form.password.value === '' ) {
        alert('All fields must be filled!')
    }
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const data = { email, password }
    console.log(data)
    form.reset();
}
