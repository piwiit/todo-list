const liste = document.getElementById('style');
const input = document.querySelector('input[type=text]');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const todo = document.createElement('li');
  liste.appendChild(todo);

  todo.textContent = input.value;
  input.value = '';
});
