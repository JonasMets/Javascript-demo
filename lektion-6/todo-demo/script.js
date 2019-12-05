$( function () {
  
  $('#btnGet').click(function (e) {

    // get all posts
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      for(post of data){
        // document.getElementById('get-result').innerHTML = post.body;
        document.getElementById('get-result').innerHTML = `
        <p> id:${post.id}</p> 
        <p> title:${post.title}</p>
        <p> body:${post.body}</p>`;
      }

    })
  
  })


  $('#btnPost').click(function (e) {

    let postvalue = document.getElementById('numberPost');

    console.log(postvalue);
    // get all posts
    fetch('https://jsonplaceholder.typicode.com/posts',
    {
      method: 'POST',
      body: JSON.stringify({
        title: postvalue,
        body: postvalue,
        userId: postvalue
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }

    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    
  
  })


})