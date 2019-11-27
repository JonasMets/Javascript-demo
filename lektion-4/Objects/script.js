// Jquery
$(function () {

  // tomt object som kan användas senare
  let object = {};

  // objekt person 
  const person = {
    firstName: 'Bob',
    lastName: 'Doe',

    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    },
    addresses:{
      street:'gatan 1',
      zipCode: 12345,
      city: 'Västerås',
      fullAddress: function () {
        // return this.street + ' ' + this.zipCode + ' ' + this.city;
        return `${this.street} ${this.zipCode} ${this.city}`;
      }
    },
    phoneNumber:[
      '555-435345',
      '555-442423424'
    ],
    emailAddress:'bob@doe.com',
    description:`Hell´o world`


  };
  // skriver ut firstName från objektet person
  // document.write(person.firstName + ' ' + person.lastName);

  // kallar på funktionen fullName och returnerar firstName och lastName
  // document.write(person.fullName());

  for (value in person) {
    console.log(person[value]);
  }


  // JSON gör om javascript objektet till JSON string som kan läsas av olika programspråk C# PHP Phyton mm
  let json = JSON.stringify(person);

  // skriver ut data men inte funktioner i objektet person
  // document.write(json);

  //  formaterar tillbaka till javascript objekt
  let javaScriptObject = JSON.parse(json);

  document.write(javaScriptObject.firstName);



  




})