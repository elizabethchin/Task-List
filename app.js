// Define UI Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

// Load all event Listeners
function loadEventListeners() {
    // Add task event
    form.addEventListener("submit", addTask);
    // Remove task event
    taskList.addEventListener("click", removeTask);
    // Clear task event
    clearBtn.addEventListener("click", clearTasks);
    // Filter tasks event
    filter.addEventListener("keyup", filterTasks);
}

// Add Task
function addTask(e) {
    if(taskInput.value === "") {
        alert("Add a task");
    }

    // Create li elements
    const li = document.createElement("li");
    // Add class
    li.className = "collection-item";
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement("a");
    // add class
    link.className = "delete-item secondary-content";
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // clear input
    taskInput.value = "";

    e.preventDefault();
}


// Remove Task
function removeTask(e) {
    if(e.target.parentElement.classList.contains("delete-item")) {
        if(confirm("Are you sure?")) {
            e.target.parentElement.parentElement.remove();
        }
      }
    }

// Clear Tasks
function clearTasks() {
    // taskList.innerHTML = "";
 
    // Faster option
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    /* querySelectorAll returns node list vs getElementByClass
    returns an HTML collection then you need to convert to a list to use forEach() */

    document.querySelectorAll(".collection-item").forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = "block";
        } else{
            task.style.display = "none";
        }
    });

}