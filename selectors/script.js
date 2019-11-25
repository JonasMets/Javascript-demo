
// JQuery
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
  $("#btnClick1").click((e) => {
      $(".content").toggle();
  });



});



