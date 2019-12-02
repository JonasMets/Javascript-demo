$(function () {

  // filter li
  $('ul > li').filter('.li').css('color', 'red');
  // filter id 3
  $('ul > li').filter('#3').css('color', 'green');

  // filter id 4 och ta bort
  // $('ul > li').filter('#4').remove();

  // filter li i ul med id 2
  $('ul > li').filter('#2').html('lite text');

  // filter li med even/odd
  $( 'ul > li' ).filter( ":odd" ).css( "background-color", "blue" );



  // 
  let nameArray = ["Bob","Billy","John","Doe"];

  console.log(nameArray);
  // nameArray.filter()
  // $(nameArray).filter(':contains("Bob")').splice()
  // nameArray.splice(1,1);
  // console.log(nameArray);


  // hitta namnet Billy
  let n = nameArray.indexOf("Billy");
  console.log(n);
  // ta bort namnet Billy
  nameArray.splice(n,1);
  console.log(nameArray);




})