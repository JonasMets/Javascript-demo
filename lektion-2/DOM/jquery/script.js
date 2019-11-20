
/*
  Javascript:
    let selectButton = document.getElementById('#selectButton');
    let selectButton = document.getElementByTagName('button');
    let selectButtonClass = document.getElementByClassName('btn');

  JQuery:

    let selectButtonId = $('#selectButton');
    let selectButtonTag = $('button');
    let selectButtonClass = $('.btn');
    
*/

// JQuery:  detta ska finnas i början av dokumentet
$(document).ready(function () {

  let selectButtonId = $('#selectButton');
  let selectButtonTag = $('button');
  let selectButtonClass = $('.btn');

  // skriva text
  $('#divId1').text('Detta är en text');
  // skriva html
  $('#divId2').html('<p>Detta är en html text<p/>');
  // ändra css
  $('#divId2').css('color','#336');
  $('#divId2').css('font-size','2rem');
  // 
  $('#divId2').hide();
  $('#divId2').show();


  //   https://api.jquery.com/toggle/
  $( "#selectButton" ).click(function() {
    $( "#divId2" ).toggle( "slow", function() {
      // Animation complete.
    });
  });


});





