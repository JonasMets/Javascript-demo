
// JQuery
$(function () {

  $('#regForm').submit(function (e) {
    e.preventDefault();

    // console.log(e);

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

    let role = e.currentTarget[3].value

    // alt3:
    // let user = {
    //   firtsName: firstName,
    //   lastName: lastName,
    //   address: address,
    //   role:role
    // };


    let user = {
      firstName: e.currentTarget[0].value,
      lastName: e.currentTarget[1].value,
      address: e.currentTarget[2].value,
      role: e.currentTarget[3].value
    }

    console.log(user);
      // console.log(user.firstName);
      // console.log(user.lastName);
      // console.log(user.address);
      // console.log(user.role);
    for (item in user) {
      console.log(user[item]) ;
    }

    

  })

});