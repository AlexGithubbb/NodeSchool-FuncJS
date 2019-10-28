/*
Write a function duckCount that returns the number of arguments passed to it which have a property 'quack' defined directly on them.Do not match values inherited from prototypes.( Object.getPrototypeOf(obj) === Object.prototype )
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

// OS
function duckCount() {
  return (
    Array.prototype.slice
      .call(arguments) // copy the objet into a array use Array.prototype.slice.call(arguments)
      // filter out those objects has property 'quack'
      .filter(obj => Object.prototype.hasOwnProperty.call(obj, 'quack')).length
  );
}

module.exports = duckCount;

// const array = Array.prototype.arguments.slice.call(arguments); // make the object into a array

// // returns the length of those obj has property 'quack'
// array.filter(obj => {
//   return Object.prototype.hasOwnProperty.call(obj, 'quack');
// }).length;
