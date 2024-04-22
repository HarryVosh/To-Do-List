const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// To Add the task in the list.
function addTask(){
    if(inputBox.value == ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

// To checked and remove the data from the list.

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// To store the data in the To-do list on refreshing the web page.

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// To display the data when the web page will be refresh, it is use to show the data.
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();