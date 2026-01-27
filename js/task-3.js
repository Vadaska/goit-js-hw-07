const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

function updateGreeting() {
  const greeting = inputName.value.trim();
  if (greeting.length === 0) {
    outputName.textContent = 'Anonymus';
  } else {
    outputName.textContent = greeting;
  }
}
inputName.addEventListener('input', updateGreeting);

updateGreeting();
