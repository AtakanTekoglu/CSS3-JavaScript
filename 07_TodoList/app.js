// ! Get all required element
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const footerBtn = document.querySelector(".footer button");

showTasks();

inputBox.onkeyup = () => {
    let userData = inputBox.value; //*get user data
    if (userData.trim() != 0) { //*if user's value are not only spaces
        addBtn.classList.add("active"); //*add active class
    }
    else{
        addBtn.classList.remove("active");//*remove active class
    }
}

addBtn.addEventListener("click",() => {

    let userData = inputBox.value; //*get user data
    let getLocalStorage = localStorage.getItem("New Todo");
    if (getLocalStorage == null) {
        listArr = []
    } 
    else {
        listArr = JSON.parse(getLocalStorage); //! transform json string into a JS object
    }
    listArr.push(userData);
    localStorage.setItem("New Todo",JSON.stringify(listArr));//! transform JS Object to json string
    inputBox.value = "";
    showTasks();
    addBtn.classList.remove("active");
})




function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");
    let myTodos = [];
    
    let newLiTag = '';
    if (getLocalStorage != null) {
        myTodos = JSON.parse(getLocalStorage);
        myTodos.forEach((item,index) => {
            newLiTag += `<li>${item}<span onclick="deleteTodo(${index})"><i class="fas fa-trash"></i></span></li>`;
        });
        todoList.innerHTML = newLiTag;
    }
    const numOfTodo = document.querySelector(".numOfTodo");
    if (myTodos.length > 0) {
        footerBtn.classList.add("active");
    }
    else{
        footerBtn.classList.remove("active");
    }
    numOfTodo.textContent = myTodos.length;
}

function deleteTodo(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage); //! transform json string into a JS object
    listArr.splice(index,1);
    localStorage.setItem("New Todo",JSON.stringify(listArr));//! transform JS Object to json string
    showTasks();
}

function clearAll(){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage); //! transform json string into a JS object
    listArr.splice(0,listArr.length);
    localStorage.setItem("New Todo",JSON.stringify(listArr));//! transform JS Object to json string
    showTasks();
}