$(function () {

  // object kan vara olika
  const obj1 = {
    firstName: 'object',
    lastName: 'object'
  }

  const obj2 = {
    first: 'object',
    last: 'object'
  }

  // document.write(obj1.firstName);
  // document.write(obj2.first);


//  Class = model är en gemensam standard på hur den ska se ut

// ES5
  function classPerson(firstName, lastName) {
    this.firstName = '';
    this.lastName = '';
    this.fullName = function () {
      return this.firstName + ' ' + this.lastName;
    }
  }

  // let p1 = new classPerson('Bob','Doe');
  // document.write(p1.fullName());
  // console.log(p1.fullName());



  // ES6
  // constructor(fullname){
    //   this.fullName = fullname;
      
    //   this.firstName = function () {
    //     return fullName.split(' ')[0];
    //   }
    //   this.lastName = function () {
    //     return fullName.split(' ')[1];
    //   }
    // }
  class Person {

    constructor(firstname, lastname){
      this.firstName = firstname;
      this.lastName = lastname;
      this.fullName = function () {
        return this.firstName + ' ' + this.lastName;
      }

    }

  };


  const user1 = new Person('Billy-Bob','Doe');

  document.write(user1.fullName());

  // lägg till data i user1
  user1.address = 'gatan1';

  document.write(user1.address);
  console.log(user1);

  // 
  const user2 = new Person();
  user2.firstname = 'John';

  document.write(user2.firstname);


})