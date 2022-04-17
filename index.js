//model (MVC model)
// if local storage has a todos array then use it
// otherwise use the default array 
let todos;

// retrieve what is in local storage
const savedTodos = JSON.parse(localStorage.getItem('todos'));
// check if its an array 
if (Array.isArray(savedTodos)) {
    todos = savedTodos;

} else {
    todos = [{ // made objects in the array 
        title: 'Get groceries',
        dueDate: '2022-10-04',
        id: 'id1'
    }, {
        title: 'Wash car',
        dueDate: '2022-13-04',
        id: 'id2'
    }, {
        title: 'Make dinner',
        dueDate: '2022-14-04',
        id: 'id3'
    }];
}

//creates a todo
function createTodo(title, dueDate) {
    const id = ' ' + new Date().getTime(); //gets the time in milliseconds, we had to change this to a string for the delete button to work for new todos

    todos.push({
        title: title,
        dueDate: dueDate,
        id: id // this will add an id to any new list item and set it to the new id we just created
    }); // push the new element to the end of the list 
    saveTodos();
}

// deletes a todo
function removeTodo(idToDelete) {
    todos = todos.filter(function (todo) { // this loops through todos array, put it in todo param, then run the function and reassigned todos variable
        //if the id of this todo matches idToDelete, return false
        // for everything else return true
        if (todo.id === idToDelete) { // comapring a # to a string so we cant delete new todo object
            return false;
        } else {
            return true;
        }
    });
    saveTodos();
}

function saveTodos() { // this saves the list 
    localStorage.setItem('todos', JSON.stringify(todos)); //changes the todos into strings
}

render(); // going to run the above array and render those 3 elements to the webpage

// controller section : code that deals with button clicks or actions
function addTodo() { //when button is clicked, this will add a new element to the array 
    const textbox = document.getElementById('todo-title'); //get html element by id
    const title = textbox.value; // .value gets whatever the user typed into the textbox

    const datePicker = document.getElementById('date-picker'); // this will grab the date we chose and store it in the variable datePicker
    const dueDate = datePicker.value; // we assign the date the user picked to a dueDate

    createTodo(title, dueDate);

    render(); // then this will render the updated array list to the webpage
}

function deleteTodo(event) {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;
    removeTodo(idToDelete);
    render();
}

// View section visual elements
function render() { // this is the function instructions for render 
    //reset the list to empty before we render it again
    document.getElementById('todo-list').innerHTML = ''; //this will wipe out the list and replace it with an empty string


    todos.forEach(function (todo) { // this goes through each todo and renders it on the webpage
        const element = document.createElement('div'); //create a html element of type div
        element.innerText = todo.title + ' ' + todo.dueDate; //change the text inside the html element (div) we just created

        const deleteButton = document.createElement('button'); // create a delete button to the div with all the objects
        deleteButton.innerText = 'Delete'; // change innertext to delete
        deleteButton.style = 'margin-left: 12px;'; //added style here
        deleteButton.onclick = deleteTodo;
        deleteButton.id = todo.id;
        element.appendChild(deleteButton); //add this button to each element 

        const todoList = document.getElementById('todo-list');
        todoList.appendChild(element); //adds an element to the end of the html body
    });
}
