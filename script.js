// Check if there are any tasks in local storage and load them
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    const task = taskInput.value.trim();
    if (task !== '') {
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();

        taskInput.value = '';
        taskInput.focus();
    }
}

// Function to render the tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        const li = document.createElement('li');
        li.innerHTML = `
        <input type="checkbox" onclick="toggleTask(${i})">
        <span>${task}</span>
        <button onclick="deleteTask(${i})">Delete</button>
      `;

        taskList.appendChild(li);
    }
}

// Function to toggle a task
function toggleTask(index) {
    tasks[index] = tasks[index].startsWith('✅ ') ? tasks[index].substring(2) : '✅ ' + tasks[index];
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Initial rendering of tasks
renderTasks();