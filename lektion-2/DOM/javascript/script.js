
// DOM

// document.body.innerHTML = '<div> <h1>Hello<h1/> <div/>';

// document.getElementById('div2').innerText='Hello';

// 
let res = document.getElementById('div3');

document.getElementById('getResult').addEventListener('click',getresults);

// triggas från eventlistener
function getresults(e) {
  document.getElementById('div2').innerText='This is a result';
};


// triggas från html med knapp onclick
function changeContent(e) {
  res.innerText='ändrat text med changeContent';
  // res.style.backgroundColor='#333';
  
};





