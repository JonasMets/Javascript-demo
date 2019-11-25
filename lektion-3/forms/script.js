
// JQuery
$(function () {

  $('#regForm').submit(function (e) {
    e.preventDefault();

    console.log(e);

    // kontrollera om checkbox är checked
    if (!(e.currentTarget[4].checked)) {
      alert('check the box');
      return false;
    }


    // alt1: spara
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();

    // console.log(firstName);

    // alt2:
    let address = e.currentTarget[2].value;
    // console.log(address);

    // alt3:
    let user = {
      firtsName: firstName,
      lastName: lastName,
      address: address,
      role: e.currentTarget[3].value
    }

    // console.log(user);
    for(info in user){
      console.log(info);

    }

  })

});