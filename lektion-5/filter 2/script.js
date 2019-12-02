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

  // filter med contains List item 1
  $( 'ul > li' ).filter( ':contains(List item 1)' ).css( "background-color", "green" );



  // 
  let nameArray = ["Bob","Billy","John","Doe"];

  console.log(nameArray);
  // nameArray.filter()
  // $(nameArray).filter(':contains("Bob")').splice()
  // nameArray.splice(1,1);
  // console.log(nameArray);

  // kollar om nameArray innehåller John
  console.log(nameArray.includes('John'));

  // hitta namnet Billy
  let n = nameArray.indexOf("Billy");
  console.log(n);
  // ta bort namnet Billy
  nameArray.splice(n,1);
  console.log(nameArray);




})