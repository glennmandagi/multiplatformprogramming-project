/*
    1. Let and Const
*/

//ES5
// console.log(firstName5);
// var firstName5 = 'John';

// //ES6
// console.log(firstName6);
// let firstName6 = 'Jane';
// firstName = 'Kyle';
// console.log(firstName6);
// const birthYear = 1991;
// console.log(firstName6, birthYear);

//Scope ES5 : global scope & function scope

// let showData5 = function (birthYear) {
//     if (birthYear >= 1990)
//     {
//         var firstName = 'John';  
//     }
//     console.log('First Name : ' + firstName);
//     console.log('BirthYear : ' + birthYear);
// }
// showData5(1991);

//Scope ES6 : block scope

// let showData6 = function (birthYear) {
//     if (birthYear >= 1990)
//     {
//         let firstName = 'John';  
//     }
//     console.log('First Name : ' + firstName);
//     console.log('BirthYear : ' + birthYear);
// }
// showData6(1991);

/*
    2. Block and 
    IIFE (Immediately Invoke Function Expression)
*/

//ES5
// (function(){
//     var x = 5;
//     var y = 10;
//     console.log(x, y);
// })();

// //ES6
// {
//     let x = 15;
//     let y = 25;
//     console.log(x, y);
// }

/*
    3. String
*/


// var firstName = 'John';
// var lastName = 'Smith';
// var birthYear = 1990

// var calcAge = function(birthYear){
//     return 2019 - birthYear;
// }
// //ES5
// console.log(firstName + ' ' + lastName + 
//             ', BirthYear = ' + birthYear + ', Age = ' + calcAge(birthYear));
// //ES6
// console.log(`${firstName} ${lastName}, BirthYear = ${birthYear}, Age = ${calcAge(birthYear)}`);

/*
    4. Arrow Function
*/

//Simbol =>
//No parameter
//ES5
// var showData5 = function (){
//     return ('Good Bye World');
// }
// console.log(showData5());
// //ES6
// let showData6 = () => {'Good Bye World'};
// console.log(showData6());

//One Parameter
//ES5

/*
var showData5 = function (firstName){
    return (`Hello ${firstName}`);
}
console.log(showData5('John'));
//ES6
const showData6 = firstName => `Hello ${firstName}`;
console.log(showData6('Marry'));
*/

/*
//Two Parameters
//ES5
var add5 = function (x, y) {
    return x + y;
}
console.log(add5(5,7));
//ES6
let add6 = (x, y) => x + y;
console.log(add6(8,9));
*/

/*
//Object Literals
//ES5
var johnData5 = function(id, name){
    return {
        id: id,
        name: name
    }
}
console.log(johnData5(2,'John'));
//ES6
let johnData6 = (id, name) => ({id, name});
console.log(johnData6(2, 'John'));
*/

//Callback Function in JavaScript

//Map Helper

// var numbers = [0,1,2,3,4];
// var doubleNumbers = [];

// for (var i=0; i<5; i++){
//     //doubleNumbers[i] = numbers[i]*2;
//     doubleNumbers.push(numbers[i]*2);
// }
// console.log(doubleNumbers);

// const numbers2 = numbers.map(el => el*2)

// console.log(numbers2);

// var cars = [
//     {name: 'Toyota Agya', color: 'White'},
//     {name: 'Daihatsu Xenia', color: 'Silver'},
//     {name: 'Pajero', color: 'Black'}
// ];

// const carsName = cars.map(el => el.name)
// console.log(carsName);

/* 5. Destructuring */

// const car = {
//     name: 'Agya',
//     color: 'White',
//     price: '$1000'
// };

//ES5
// const name = car.name;
// const color = car.color;
// const price = car.price;



//ES6
// let name, color, price
// ({ name, color, price } = car);

// console.log(name, color, price);

// const getCar = ({name, color, price}) => {
//     return `Name = ${name}, Color = ${color}, Price = ${price}`;
// }

// console.log(getCar(car));

// //Destructuring Array
// // const numbers = [0,1,2,3];
// // const [a,b,c,d] = numbers;
// // console.log(a,b,c,d);

// //Destructuring Array Object
// const cars = [
//     {name: 'Toyota Agya', color: 'White'},
//     {name: 'Daihatsu Xenia', color: 'Silver'},
//     {name: 'Pajero', color: 'Black'}
// ];

// const [{color: a}, {color: b}, {color: c}] = cars;
// const [ color0, color1, color2 ] = cars.map(el => {
//     return el.color;
// });
// console.log(color0, color1, color2)

/*
    6. Rest and Spread Operator
*/


//Rest Operator
//ES5
// const addNumbers5 = (a, b, c, d, e, f) => {
//     let numbers = [a, b, c, d, e, f];
//     let sum  = 0;
//     for(let i=0; i<numbers.length; i++){
//         sum += numbers[i];
//     }
//     return sum;
// }

// console.log(addNumbers5(1,2,3,4,5,6));
// //ES6
// const addNumbers6 = (...numbers) => {
//     let sum  = 0;
//     for(let i=0; i<numbers.length; i++){
//         sum += numbers[i];
//     }
//     return sum;
// }

// console.log(addNumbers6(1,2,3,4,5,6,7,8,9,10,11))

// const numbers = [1, 2, 3, 4, 5];

// const[a,b, ...rest] = numbers;

// console.log(a);
// console.log(b);
// console.log(rest);

// //Spread Operator
// const toyotaCar = ['Avanza', 'Agya', 'Kijang', 'Inova'];
// const daihatsuCar = ['Xenia', 'Grand Max', 'Terios'];
// const mitsubishiCar = ['Pajero', 'Expander'];

// //ES5
// const car5 = toyotaCar.concat(daihatsuCar.concat(mitsubishiCar));
// //ES6
// const car6 = [...toyotaCar, 'Rush', ...daihatsuCar, ...mitsubishiCar];

// console.log(car5);
// console.log(car6);

// //Combine Rest and Spread Operator

// const validateItem = (...items) => {
//     if(items.indexOf('Susu') < 0){
//         return ['Susu', ...items];
//     }

//     else{
//         return items;
//     }
// }

// console.log(validateItem('Roti', 'Pisang', 'Pepsi'));

// /*
//     7. Default Function Argument
// */

// const makeAjaxRequest = (url, method = 'GET') => {
//     console.log(url, method);
//     //Some logic here
// }

// makeAjaxRequest('www.google.com');
// makeAjaxRequest('www.google.com', 'POST');

//8. Classes
//9. Promise and Fetch
