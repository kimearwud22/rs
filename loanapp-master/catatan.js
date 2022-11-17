let button = document.querySelector('.submit-btn');
let list = document.querySelector('.todo-list');

let thingsToDo = [
    "walk the dog",
    "mow the front lawn",
    "redecorate the bookshelves",
    "paint the ceiling to look like the sky on tatooine"
];

button.addEventListener('click', () => {
    let textInput = document.querySelector('.new-todo-input').value;
    updateList(textInput);
});

thingsToDo.map( todoItem => {
    updateList(todoItem);
})

//Add an Element
function updateList(todoItem){
    //Create Elements
    let newToDo = document.createElement("li");
    let deleteBtn = document.createElement("button");
  
    //Assign Text To Elementss
    deleteBtn.innerText = "X";
    newToDo.innerText = todoItem;
    
    //Delete
    deleteBtn.addEventListener('click', () => {
        newToDo.remove();
    })
  
    //Add Elements to The DOM
    newToDo.append(deleteBtn);
    list.append(newToDo);
}