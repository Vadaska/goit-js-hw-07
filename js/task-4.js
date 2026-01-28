const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const email = form.elements.email;
  const password = form.elements.password;
  const login = {};

  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('All form fields must be filled in');
  } else {
    login['email'] = email.value.trim();
    login['password'] = password.value.trim();
    console.log(login);
    form.reset();
  }
});
