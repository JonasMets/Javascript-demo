$(function() {

  // event för submit form
    $('#regform').submit((e)=> {
      e.preventDefault();

      // console.log( $('#firstName').val());
      // console.log( $('#lastName').val());


      validateInput('#firstName');
      validateInput('#lastName');

    })

    $('input').keyup(function (e) {
      console.log(e.currentTarget.id);
      let id = "#" + e.currentTarget.id;
      validateInput(id);
      // validateInput('#lastName');
      isLengthOK(id,3);
    })







    function validateInput(id) {
      // validering av något
      if ($(id).val() === '') {
        console.log('tomt');
        $(id).addClass('is-invalid');
        $(id).focus();
        // $(id).removeClass('d-none');
      }
      else{
        $(id).removeClass('is-invalid');
        $(id).addClass('is-valid');
        console.log($(id).val());
      }
    }


    function isLengthOK(id,length) {
      if ($(id).val().length < length) {

        $(id).addClass('is-invalid');
        console.log('för få tecken');
      }
      else{
        $(id).removeClass('is-invalid');
        $(id).addClass('is-valid');
      }
    }


// validering av något
      // if ($('#firstName').val() === '') {
      //   console.log('tomt');
      //   $('#firstName').addClass('is-invalid');
      //   $('#firstName').focus();
      // }
      // else{
      //   $('#firstName').removeClass('is-invalid');
      //   $('#firstName').addClass('is-valid');
      //   console.log($('#firstName').val());
      // }
      // if ($('#lastName').val() === '') {
      //   console.log('tomt');
      //   $('#lastName').addClass('is-invalid');
      //   $('#lastName').focus();
      // }
      // else{
      //   $('#lastName').removeClass('is-invalid');
      //   $('#lastName').addClass('is-valid');
      //   console.log($('#lastName').val());
      // }


});