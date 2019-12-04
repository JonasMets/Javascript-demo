$(function () {

  // Fetch


});

// fetch med javascript  https://jsonplaceholder.typicode.com/todos/1

let todos = [];
// const todos = [];

console.log(1)

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(res => {

//     if (res.status === 200) {
//       console.log(2)
//       return res.json()
//     }
//   })
//   .then(data => {
//     console.log(data);
//     todos = data;
//     console.log(3)

//     console.log(todos);

//   })
//   .catch(error => {
//     console.log(`'gick inte att hämta data' ${error}`);
//     console.log(4)
//     // document.getElementById('fel').innerText(`'gick inte att hämta data' ${error}`);

//   });


  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => {
      if(res.status === 200) {
          console.log(2)
          return res.json()
      }  
  })
  .then(data => {
      todos = data
      console.log(data);
      console.log(3)

      // for (todo of todos) {
      //   // console.log(5)
      //   // console.log(todos(todo));
      //   document.getElementById('result').innerHTML=`
      //   <li> ${todos} </li>`;
      
      // }


  })
  .catch(error => {
      // document.write('FEL! ' + error)
      document.getElementById('fel').innerText=`'gick inte att hämta data' ${error}`;
      todos = [];
  })



for (todo of todos) {
  // console.log(5)
  // console.log(todos(todo));
  document.getElementById('result').innerHTML=`
  <li> ${todo} </li>`;

}









