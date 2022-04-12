const input = document.querySelector('input[type=text]');
const form = document.querySelector('form');

const storageList = () => {
  window.localStorage.todoList = ul.innerHTML;
};

const getStorageList = () => {
  if (!window.localStorage.todoList === '') {
    ul.innerHTML = window.localStorage.todoList;
  } else {
    console.log('test');
    ul.innerHTML = ` <li>Cliquez sur un todo pour le supprimer</li>`;
  }
};

window.addEventListener('load', getStorageList);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const todo = document.createElement('li');
  ul.appendChild(todo);

  todo.textContent = input.value;
  input.value = '';
  storageList();
});

ul.addEventListener('click', (e) => {
  if (e.target.classList.contains('linethrough')) {
    e.target.remove();
  } else {
    e.target.classList.add('linethrough');
  }
  storageList();
});
