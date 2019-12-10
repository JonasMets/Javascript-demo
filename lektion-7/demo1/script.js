

// Javascript
// skapa variabler som kan användas senare
// form id="demoForm"
const formQuery = document.querySelector('#demoForm');
const formId = document.getElementById('demoForm');

// input id="demo-input"
const forminput1 = document.getElementById('demo-input1');
const forminput2 = document.getElementById('demo-input2');

const resultsOutput = document.getElementById('results');


// eventlistener
formId.addEventListener('submit',(e)=>{
  e.preventDefault();

  const item = document.querySelector('input');
  for(input of e.target){
    
    // console.log(input.type)
    // console.log(input.value)
  }

  const errors = [];

  for (let i = 0; i < e.target.length; i++) {
    

    if (e.target[i].type ==="text") {
      errors[i] = validateInput(e.target[i].value);
    }    
  }
  console.log(errors)
let err =errors.includes(false);
console.log(err)
  if (err) {
    console.log('fel i formuläret')
  }



  // console.log(e.target);
  // sendRequest(forminput1);
});




// funktion som gör något
// skicka med data i funktionen
function validateInput(inputvalue) {
  if (inputvalue !== '') {
    console.log(inputvalue)
    return inputvalue;
    // return true;
  }
  else {
    
    return false;
  }

};


// funktion som gör något
function sendRequest(inputvalue) {


  let result = validateInput(inputvalue);
  console.log(result.value);

};





// // Jquery
// $(function () {

// })



