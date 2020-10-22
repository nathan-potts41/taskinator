var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");



var taskFormHandler = function (event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // package up data as an object
    var taskDataobj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    createTaskEl(taskDataobj);

};

var createTaskEl = function (taskDataobj) {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataobj.name + "</h3><span class='task-type'>" + taskDataobj.type + "</span>";

    listItemEl.appendChild(taskInfoEl);

    tasksToDoEl.appendChild(listItemEl);
}


formEl.addEventListener("submit", taskFormHandler);
