let todo1 = 'Get groceries'; //strings
let todo2 = 'Wash car';
let todo3 = 'Make dinner';

let todos = ['Get groceries', 'Wash car', 'Make dinner']; //array : list of values
todos.push('another todo'); //add item to an array

//create a new variable called todoTitle
function addTodo(todoTitle) { // create a function to resuse the code, takes a parameter
    let element = document.createElement('div'); //create a html element of type div
    element.innerText = todoTitle; //change the text inside the html element (div) we just created
    document.body.appendChild(element); //adds an element to the end of the html body
}

addTodo(todo1); //assign the value to todoTitle
addTodo(todo2);
addTodo(todo3);
