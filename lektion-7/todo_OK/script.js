const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
let todoItems = [];

function addTodo(text) {
    const todo = { id: Date.now(), text, checked: false };

    todoItems.push(todo);

    list.insertAdjacentHTML('afterbegin', `
        <li data-key="${todo.id}">
            <input id="${todo.id}" type="checkbox">Ok
            <label for"${todo.id}" class="complete">
            <span class="todotext">${todo.text} </span>
            <button id="tododelete" class="delete">X</button>
        </li>
    `);
}

function deleteTodo(datakey) {
    todoItems = todoItems.filter(item => item.id !== Number(datakey));

    const item = document.querySelector(`[data-key='${datakey}']`);
    item.remove();
}
  
function toggleComplete(e,datakey) {
    const index = todoItems.findIndex(item => item.id === Number(datakey));
    todoItems[index].checked = !todoItems[index].checked;

    console.log(datakey);
    
    // test
    let checkbox2 = document.getElementById('checkbox2');
    checkbox2.checked = !checkbox2.checked;
    // console.log(checkbox2.checked);
    // test

    // let box = document.getElementById(`${datakey}`);
    let box=document.querySelector(`[data-key='${datakey}']`);
    console.log(box.classList);
    
    // 
    // const item = document.querySelector(`[data-key]=${datakey}`);
    const item = document.querySelector(`[data-key='${datakey}']`);
    if(todoItems[index].checked) {
        item.classList.add('completed');
    }
    else {
        item.classList.remove('completed');
    }
};


list.addEventListener('click', (e) => {

    e.preventDefault();

    // if(e.target.classList.contains('complete'))
    if(e.target.type === 'checkbox') {
        //
        // const datakey = e.target.parentElement.previousElementSibling.id;
        const datakey = e.target.id;
        // 
        // console.log(datakey);
        toggleComplete(e,datakey);
    }
// if(e.target.classList.contains('delete') && e.target.nodeName !== 'SPAN') BUTTON
    if(e.target.nodeName === 'BUTTON' && e.srcElement.id === 'tododelete') {
        const datakey = e.target.parentElement.previousElementSibling.id;

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
