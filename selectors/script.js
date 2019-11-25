
// JQuery = $()
// $(document).ready(function){};
$(function () {

  // btnClick1
  // $("#btnClick1").click(function (e) {
  //   // console.log('btnClick1 is klicked');
  // });
  // $("#btnClick1").click((e)=> {
  //   console.log('btnClick1 is klicked');
  //   // console.log(e);
  // });

  // $("#btnClick1").click((e)=> console.log('btnClick1 is klicked'));

  // $("#btnClick1").click((e)=> {
  //   // $('*').hide();
  //   // $('*').show();
  // });

  // toogla div med class content
  // $("#btnClick1").click((e) => {
  //     $(".content").toggle();
  // });

  // göm knappen med this som pekar på objektet btnClick1
  // funkar ej med arrow ()=>
  // $("#btnClick1").click(function (e) {
  //   $(this).hide();
  // });

  //  kallar på funktion för att gömma <h2>
  $('h2').click(hideContent);

  // funktion för hideContent som referar till 
  function hideContent() {
    $(this).hide();
  }


  // ändrar färg på li 4
  $('ul li:last-child').css('color', 'red');

  // gömmer den li som man klickar på
  $('ul li').click(hideContent);

});



