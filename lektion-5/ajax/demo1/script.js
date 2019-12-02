$(function () {

  // Ajax javascript
  const xhttp = new XMLHttpRequest();

  // kontrollerar status
  xhttp.onreadystatechange = function (e) {
    if (this.readyState === 4 || this.status === 200) {
      // req. klar och allt gick bra
      console.log(`OK:   ${this.statusText} ${this.statusText}`);

      document.getElementById('result').innerHTML = this.response;

    }
    else if (this.readyState === 4 && this.status !== 200){
      console.log(`Error:  + ${this.statusText} + ${this.statusText}`);
      // window.location = "index.html";
    }
  }


  // initierar anrop
  xhttp.open("GET","test.txt",true);
  // startar anrop
  xhttp.send();




});