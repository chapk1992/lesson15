var loginInput = document.querySelector('.Item')

loginInput.addEventListener('change', handlerLoginInputChange);

function handlerLoginInputChange(event) {
  console.log('login input was change:', event.target.value);
}

loginInput.addEventListener('keydown', handlerLoginInputChange);

function handlerLoginInputChange(event) {
  console.log('login input was change', event.target.value);
}
