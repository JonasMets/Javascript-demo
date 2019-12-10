const form = document.querySelector('#demo-form');
const input = document.querySelector('#demo-input');
const results = document.querySelector('#demo-results');

let todos = [];

function addTodoItem(inputValue) {
    if (input.value !== '') {
        todos.push(inputValue);
        sessionStorage.setItem('todolist', todos);
        return;
    }
}

function getTodoList(todoList) {
    // console.log(sessionStorage.getItem('todolist'));
    
    todos = [];

    if (sessionStorage.getItem('todolist') !== null) {
        todos = sessionStorage.getItem('todolist').split(',');
    }

    for (todo of todos) {
        console.log(todo)
        results.insertAdjacentHTML('afterbegin', `
        <p>${todo}</p>
    `);
    }
}


//  initierar events för submit knappen
form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodoItem(input.value);
    input.value = '';
    input.focus();
    getTodoList(todos);

})

