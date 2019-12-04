



// let response =  fetch('https://jsonplaceholder.typicode.com/todos/1')

// const json = response.json();

// todos = response;
// console.log(json);


// const req = async() => {
//   let response =  fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const json = await response.json();
//   todos = json;
// }


// let todos = [];

// let todoData = () => {
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => res.json())
//     .then(data => {
//       // todos = data;
//       // console.log(todos);
//       return data;

//     })
// }
// console.log(todoData);
// todos = todoData;
// console.log(todos);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(res => res.json()

//   )
//   .then(data => {
//     todos = data;
//     console.log(todos);

//   })
//   .catch(error => {

//   })


$(function() {
  $('body').click(function() {
     
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => {

          document.getElementById('results').innerHTML = data[0].title
          localStorage.setItem('results', data);

      })       
  })

  console.log(localStorage.getItem('results'));

})