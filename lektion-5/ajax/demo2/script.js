$(function () {

  function loadLanguage() {
    const http = new  XMLHttpRequest();

    http.onreadystatechange = function (e) {
      if (this.readyState === 4 || this.status === 200) {
        // req. klar och allt gick bra
        // document.getElementById('headline').innerHTML = "hej";
        // document.getElementById('button').innerHTML = "hej";

        let obj = JSON.parse(this.responseText);

        document.getElementById('headline').innerHTML = obj.welcome;
        document.getElementById('button').innerHTML = obj.button;
  
      }
      else if (this.readyState === 4 && this.status !== 200){
        console.log(`Error:  + ${this.statusText} + ${this.statusText}`);
        // window.location = "index.html";
      }
    }

    // initierar anrop
  http.open("GET","sv-SE.json",true);
  // startar anrop
  http.send();

  }

  loadLanguage();

});