const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
let todoItems = [];

function addTodo(text) {
    const todo = { id: Date.now(), text, checked: false };

    todoItems.push(todo);

    list.insertAdjacentHTML('afterbegin', `
        <li data-key="${todo.id}">
            <input id="${todo.id}" type="checkbox">
            <label for"${todo.id}" class="complete">
            <span class="todotext">${todo.text} </span>
            <button id="tododelete" class="delete">X</button>
        </li>
    `);
}

function deleteTodo(datakey) {
    todoItems = todoItems.filter(item => item.id !== Number(datakey));

    const item = document.querySelector(`[data-key='${datakey}']`);

    // console.log(datakey);
    // console.log(item);
    item.remove();
}
  
function toggleComplete(datakey) {
    const index = todoItems.findIndex(item => item.id === Number(datakey));
    todoItems[index].checked = !todoItems[index].checked;

    // console.log(datakey);
    console.log(todoItems[index].checked);

    // const item = document.querySelector(`[data-key]=${datakey}`);
    const item = document.querySelector(`[data-key='${datakey}']`);
    if(todoItems[index].checked) {
        item.classList.add('completed');
    }
    else {
        item.classList.remove('completed');
    }
}


list.addEventListener('click', (e) => {

    e.preventDefault();
    //  .target.id
    console.log(e);
    console.log(e.target.className);
    console.log(e.target.nodeName);
    console.log(e.srcElement.id);
    console.log(e.target.type);

    // if(e.target.classList.contains('complete'))
    if(e.target.type === 'checkbox') {
        //
        // const datakey = e.target.parentElement.previousElementSibling.id;
        const datakey = e.target.id;
        // 
        console.log(datakey);
        toggleComplete(datakey);
    }
// if(e.target.classList.contains('delete') && e.target.nodeName !== 'SPAN') BUTTON
    if(e.target.nodeName === 'BUTTON' && e.srcElement.id === 'tododelete') {
        const datakey = e.target.parentElement.previousElementSibling.id;
        // const datakey = e.target.id;
        // const datakey = e.target.parentElement.id;
        // const datakey =e.srcElement.id;

        
        console.log(datakey);
        deleteTodo(datakey);
    }


})


form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo(input.value);
    input.value = '';
    input.focus();

    console.log(todoItems)
})
