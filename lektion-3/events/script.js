// 
$(function () {

  // event för knapp
  // $('#btnAlert').click(function(e) {
  //   alert('varning');

  // })

  // $('#btnAlert').on('click',function(e) {
  //   alert('varning');
  // });

  // $('#btnAlert').dblclick(function() {
  //   alert('varning');
  // });

  // $('#btnAlert').hover(function() {
  //   alert('varning');
  // });

  // $('#btnAlert').mouseenter(function () {
  //   alert('varning');
  // });

  // $('#btnAlert').mouseleave(function () {
  //   alert('varning');
  // });

  // $('#btnAlert').mouseenter(function () {
  //   alert('mouseenter');
  // }).mouseleave(function () {
  //   alert('mouseleave');
  //   // $(this).css('background', 'green');
  // });


  // ändra färg när man klickar i fälten
  // $('input').focus(function (e) {
  //   $(this).css('background', 'green');
  // })
  // // 
  // $('input').blur(function (e) {
  //   $(this).css('background', 'white');
  // })


  // lägg till och ta bort klasser istället för att ändra css
  // $('input').focus(function (e) {
  //   $(this).addClass('focus');
  // })
  //   .blur(function (e) {
  //     $(this).removeClass('focus');
  //   })

  // läser av data från knapptryck
  // $('input').keyup(function (e) {
  //   console.log('key up trigged');
  //   // console.log(e.target.value);
  //   console.log(e.key);
  // })

  // $('input').keyup(function (e) {
  //   console.log(e);
  // })


  // kontroll av submit med preventDefault så att sidan ej laddas om
  $('#loginForm').submit(function (e) {
    e.preventDefault();

    console.log('validerar');
    // setTimeout(2000);
    console.log('validerat klart');

  })



  

});


