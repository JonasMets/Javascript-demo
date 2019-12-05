$( function () {
  
  $('#btnGet').click(function (e) {


    let itemnumber = document.getElementById('menuitem').value;
    console.log(itemnumber);

    // get all posts
    fetch('https://thaikokitallkrogen.azurewebsites.net/api/fooditems')
    .then(res => res.json())
    .then(data => {
      console.log(data.categories);
      console.log(data.categories[0].fooditems[parseInt(itemnumber)]);
      console.log(data.categories[0].fooditems[parseInt(itemnumber)].number);
      console.log(data.categories[0].fooditems[parseInt(itemnumber)].name );
      console.log(data.categories[0].fooditems[parseInt(itemnumber)].hotness );
      console.log(data.categories[0].fooditems[parseInt(itemnumber)].description );
      console.log(data.categories[0].fooditems[parseInt(itemnumber)].price );
      console.log(data.categories[0].fooditems[parseInt(itemnumber)].takeaway );

      
        // document.getElementById('get-result').innerHTML = post.body;
         

        let outPut  = `
        <p> namn:${data.categories[0].fooditems[parseInt(itemnumber)].number}</p>
        <p> namn:${data.categories[0].fooditems[parseInt(itemnumber)].name}</p> 
        <p> styrka:${data.categories[0].fooditems[parseInt(itemnumber)].hotness}</p>
        <p> beskrivning:${data.categories[0].fooditems[parseInt(itemnumber)].description}</p>
        <p> pris:${data.categories[0].fooditems[parseInt(itemnumber)].price}</p>
        <p> take away:${data.categories[0].fooditems[parseInt(itemnumber)].takeaway}</p>`;
        
    
      // printa ut resultat
      document.getElementById('get-result').innerHTML =outPut;

    })
  
  })


  
})