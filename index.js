
const todos = [{ // made objects in the array 
    title: 'Get groceries',
    dueDate: '2022-10-04'
}, {
    title: 'Wash car',
    dueDate: '2022-13-04'
}, {
    title: 'Make dinner',
    dueDate: '2022-14-04'
}];

render(); // going to run the above array and render those 3 elements to the webpage

function addTodo() { //whnen button is clicked, this will add a new element to the array 
    const textbox = document.getElementById('todo-title'); //get html element by id
    const title = textbox.value; // .value gets whatever the user typed into the textbox

    const datePicker = getElementById('date-picker'); // this will grab the date we chose and store it in the variable datePicker
    const dueDate = datePicker.value; // we assign the date the user picked to a dueDate
    todos.push({
        title: title,
        dueDate: dueDate
    }); // push the new element to the end of the list 

    render(); // then this will render the updated array list to the webpage
}


function render() { // this is the function instructions for render 
    //reset the list to empty before we render it again
    document.getElementById('todo-list').innerHTML = ''; //this will wipe out the list and replace it with an empty string


    todos.forEach(function (todo) { // this goes through each todo and renders it on the webpage
        const element = document.createElement('div'); //create a html element of type div
        element.innerText = todo.title + ' ' + todo.dueDate; //change the text inside the html element (div) we just created
        const todoList = document.getElementById('todo-list');
        todoList.appendChild(element); //adds an element to the end of the html body
    });
}
