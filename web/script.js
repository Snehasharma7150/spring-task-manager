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
