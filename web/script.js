const apiUrl = 'http://localhost:8080/api/tasks'; // Replace with your backend URL

document.addEventListener('DOMContentLoaded', () => {
    fetchTasks();
});

function fetchTasks() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(tasks => {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = ''; // Clear existing tasks
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.textContent = task.description; // Assuming 'description' is a field in your Task object
                taskList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching tasks:', error));
}
const addTaskForm = document.getElementById('addTaskForm');
addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const newTask = { description: taskInput.value };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
    })
    .then(response => response.json())
    .then(task => {
        console.log('Task added:', task);
        taskInput.value = ''; // Clear the input field
        fetchTasks(); // Refresh the task list
    })
    .catch(error => console.error('Error adding task:', error));
});
