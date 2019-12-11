// wep api


function getFullName(firstname,lastname) {
  // om data inte är .json() format får man ta text()
fetch(`https://inlupp-fa.azurewebsites.net/api/users?firstname=${firstname}&lastname=${lastname}`)
.then(res => res.text())
.then(data=> console.log(data))
.catch()
  // returnerar
  // return data;
}

// hämta data som är json()
function getTotalSales() {
  fetch(`https://inlupp-fa.azurewebsites.net/api/total-sales`)
.then(res => res.json())
.then(data=> console.log(data.amount))
.catch()
}



const totalSales = async () => {
  await fetch(`https://inlupp-fa.azurewebsites.net/api/total-sales`)
  .then(res => res.json())
}


class EasyHTTP {
// Make an HTTP GET Request 
async get(url) {
  const response = await fetch(url);
  const resData = await response.json();
  return resData;
}
}



const http = new EasyHTTP;
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data[0].name))
  .catch(err => console.log(err));

let data = http.get('https://jsonplaceholder.typicode.com/users')
//                     data[0].name
.then(data => {return data}) 
.catch(err => console.log(err));

//   .PromiseValue  [PromiseStatus]
console.log(data.then(data));

// getFullName('bob','doe');

// getTotalSales();

// console.log(totalSales())






