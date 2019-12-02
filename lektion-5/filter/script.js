$(function() {

  // submit
  // $('#oneForm').submit(()=>{

  // })

  $('#oneForm').on('submit',function (e) {
    // förhindra defult submit = skicka data och ladda om
    e.preventDefault();

    // kontrollera input med ett meddelande om det saknas
    validateField('#firstName','Ange ett förnamn');
    validateField('#lastName','Ange ett efternamn');
    
  });


  // när man går ifrån inmatningsfältet
  $('#firstName').on('blur',function (e) {
    validateField('#firstName','Ange ett förnamn');
    validateField('#firstName','Måste vara fler än 1 tecken');
  })



  function validateField(input, error_message) {
    let inputVal = $(input).val();
    let fieldName = $(input).attr('data-fieldName');
    let error_array = [];


    // kontrollera om input innehåller <
    if (inputVal.includes('<')) {
      console.log(`contains ${inputVal}`)
      return false;
    }

    if (inputVal.length < 1 ) {

      console.log(`${fieldName} ${error_message}`);

      // console.log($(inputVal).attr('fieldName'));

      // #errorMessage visas på sidan
      $('#errorMessage').append(`<li> ${error_message} </li>`);
    }
    else if (inputVal === ''){

    }



  
    if (error_array.length === 0) {
      // send to database
    }
    

  };



});