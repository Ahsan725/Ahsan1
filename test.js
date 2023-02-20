const form = document.getElementById('form');
const taskInput = document.getElementById('task');
const dueDateInput = document.getElementById('dueDate');
const prioritySelect = document.getElementById('priority');
const tasks = document.getElementById('tasks');
const audio = new Audio('tada.mp3');

form.addEventListener('submit', addTask);

function addTask(e) {
  e.preventDefault();
  if (taskInput.value === '') {
    return;
  }

  const task = document.createElement('li');
  task.innerHTML = `
    <input type="checkbox">
    <p>${taskInput.value}</p>
    <span>Due: ${dueDateInput.value}</span>
    <button type="button">Delete</button>
  `;
  task.classList.add(prioritySelect.value);

  task.querySelector('input[type="checkbox"]').addEventListener('change', toggleDone);

  task.querySelector('button').addEventListener('click', removeTask);
  tasks.appendChild(task);

  taskInput.value = '';
  dueDateInput.value = '';
  prioritySelect.value = '';
}

function toggleDone(e) {
  const task = e.target.parentNode;
  task.querySelector('p').classList.toggle('done');

  if (task.querySelector('p').classList.contains('done')) {
    task.querySelector('p').innerHTML = `<strike>${task.querySelector('p').textContent}</strike>`;
    audio.play();
  } else {
    task.querySelector('p').innerHTML = task.querySelector('p').textContent;
    task.querySelector('p').style.backgroundColor = "";
  }
}

function removeTask(e) {
  const task = e.target.parentNode;
  tasks.removeChild(task);
}
