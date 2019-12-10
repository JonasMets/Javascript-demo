// 
$(function () {

let todos = [];


 document.getElementById('regButton').addEventListener('click', readInput);


function readInput(e) {
  e.preventDefault();
  let input = document.getElementById('todo').value;
  // input.value != null  &&
if (  input != "") {
  addToDos();

  listToDos();
}
  // console.log(input);
  

}

function addToDos() {
  let input = document.getElementById('todo').value;
  // todos.push(input);
  todos.unshift(input);

  input.value = '';

  $('#todo').val('');
}


function listToDos() {
  
  let showOutput = document.getElementById("output");

    showOutput.innerHTML ='';
  
  for (let i = 0; i < todos.length; i++) {
    
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(todos[i]));


    // <!-- <input type="checkbox" name="" id=""> -->
    const checkbox = document.createElement('input');
    checkbox.type="checkbox";
    checkbox.value="Jag är klar";
    checkbox.textContent="Jag är klar";
    li.appendChild(checkbox);

    showOutput.appendChild(li);
  }
  
}

})
