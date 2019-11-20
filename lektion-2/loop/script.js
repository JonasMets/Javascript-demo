
//  array med string
const nameArray = ['Hans','Isabelle','Gustav','Amanda','Ali','Sasha','Fredrik','Mali'];

// array med objekt
const userArray = [
    { name: 'Hans', email: 'hans@hans.com', age: 35, status: true },
    { name: 'Isabelle', email: 'isabelle@domain.com', age: 28, status: true },
    { name: 'Gustav', email: 'gustav@domain.com', age: 31, status: false },
    { name: 'Amanda', email: 'amanda@domain.com', age: 42, status: true },
    { name: 'Ali', email: 'ali@domain.com', age: 23, status: true },
    { name: 'Sasha', email: 'sasha@domain.com', age: 44, status: true },
    { name: 'Fredrik', email: 'fredrik@domain.com', age: 53, status: true },
    { name: 'Mali', email: 'mali@domain.com', age: 42, status: false }
];


// lägg till i början
// nameArray.unshift('hej hej');

// lägg till i slutet
// nameArray.push('hej hej');

// ta bort i början
// nameArray.shift('hej hej');

// ta bort i slutet
// nameArray.pop('hej hej');

// console.log(nameArray);


// loopar  for, foreach, while 

// for (let index = 0; index < nameArray.length; index++) {
//     console.log( `index${index} ${nameArray[index]}`);
// }


// foreach används till objekt

//  exempel 1
// for(let user of userArray){
//     console.log(user.name + user.age);
// }

//  exempel 2
// nameArray.forEach(function (name) {
//     console.log(name);
// })

//  exempel 3 med Arrow function
// nameArray.forEach((name) => {
//     console.log(name);
// });



//  while loopar
// exempel 1
// let i=0;
// while (i < nameArray.length) {
//     console.log(nameArray[i]);
//     i++;
// }

// exempel 2 
// let i=0;
// do {
//     console.log(nameArray[i]);
//     i++;
// } while (i < nameArray.length);










