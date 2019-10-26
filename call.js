/*
Write a function duckCount that returns the number of arguments passed to it which have a property 'quack' defined directly on them.Do not match values inherited from prototypes.
*/

// duck = {
//   quack: () => {
//     console.log('quack');
//   },
//   number: 3
// };

// console.log(Object.getPrototypeOf(duck) === Object.prototype); // true
// console.log(duck.hasOwnProperty('quack')); // true
// console.log(duck.hasOwnProperty('number')); // true

// let duck = Object.create(null);
// duck.quack = function() {
//   console.log('quack');
// };

// console.log(typeof duck);
// console.log(typeof Object); // function
// console.log(Object); // function
// console.log(Object.getPrototypeOf(duck) === Object.prototype); // false
// console.log(Object.getPrototypeOf(duck) === null); // true

// console.log(duck.hasOwnProperty('quack'));

// console.log(Object.prototype.hasOwnProperty.call(duck, 'quack')); // true

// function duckCount() {
//   return Array.prototype.slice
//     .call(arguments)
//     .filter(obj => Object.prototype.hasOwnProperty.call(obj, 'quack')).length;
// }

// module.exports = duckCount;

const array = Array.prototype.arguments.slice.call(arguments); // make the object into a array

// returns
array.filter(obj => {
  return Object.prototype.hasOwnProperty.call(obj, 'quack');
}).length;
