document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value;
        if (taskText.trim() !== "") {
            createTask(taskText);
            taskInput.value = "";
        }
    });

    function createTask(text) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `
            <input type="text" value="${text}">
            <button class="update-task">Update</button>
            <button class="delete-task">Delete</button>
        `;
        taskList.appendChild(taskItem);

        const deleteButton = taskItem.querySelector(".delete-task");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
        });

        const updateButton = taskItem.querySelector(".update-task");
        updateButton.addEventListener("click", function () {
            const newTaskText = taskItem.querySelector("input").value;
            if (newTaskText.trim() !== "") {
                taskItem.querySelector("input").value = newTaskText;
            }
        });
    }
});
