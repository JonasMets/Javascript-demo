$(function () {

  // Objects när man bara vill skapa ett objekt
  const jsObj = {};

  const obj = {
    firstName: 'Bob',
    lastName: 'Doe',
    fullName: function () {
      return firstName + ' ' + lastName;
    }
  }


  // class används när man vill skapa fler objekt med den som mall
  class JsClass { };

  class Person {
    // skapar mallen
    constructor(firstname, lastname) {
      this.firstName = firstname;
      this.lastName = lastname;
      this.fullName = function () {
        return this.firstName + ' ' + this.lastName;
      }
    }

  };

  class Product1{
    constructor(sku,name){
      this.sku = '';
      this.name = '';
    }
    totalPrice (){
      return this.price + this.tax;
    }

  };

  let product1 = new Product1();
  
  product1.name = 'car';

  document.write(product1.name)

  // Prototype så här ser klass ut i grunden
  function Product2() {
      this.sku = '';
      this.name = '';
      this.price = 0;
      this.tax = 12;
      this.totalPrice = function () {
        return this.price + this.tax;
      }
  };


  //  extends ärver data från en annan class
  class Product3 extends Product1{
    
    constructor(sku,name,color,size){
      super(sku,name);
      this.color = '';
      this.size = '';
    }
  }

  let lorry = new Product3();
  lorry.sku = 12;
  lorry.name = 'lorry1';
  lorry.color = 'red';

  let lorry2 = new Product3();


});