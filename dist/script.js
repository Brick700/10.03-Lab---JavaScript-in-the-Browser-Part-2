function domLoaded() {
    document.querySelector("#add").addEventListener("click", addBtnClick);
 
    document.querySelector("#task").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addBtnClick();
        }
    }
    );
}
 
function addBtnClick() {
    const textbox = document.querySelector("#task");
    const newTaskText = textbox.value;

    if (newTaskText !== "") { //if textbox is not empty, then add task
        addTask(newTaskText);
        textbox.value = "";
        textbox.focus();
    }
}

function addTask(newTaskText) {
    const li = document.createElement("li");
    li.innerHTML = `<span class="task-text">${newTaskText}</span><button class="done-btn">&#10006;</button>`;
    const ol = document.querySelector("#newTask");
    ol.appendChild(li);

    const doneBtns = document.querySelectorAll(".done-btn");
    doneBtns[doneBtns.length - 1].addEventListener("click", removeTask);
}

function removeTask() {
    const li = event.target.parentNode;
    li.parentNode.removeChild(li);
}

document.addEventListener("DOMContentLoaded", domLoaded);