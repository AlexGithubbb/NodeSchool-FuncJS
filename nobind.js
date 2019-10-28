var slice = Array.prototype.slice;

const logger = namespace => {
  return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)));
  };
};

module.exports = logger;

// let info = logger('INFO: ');
// info('hello world'); // INFO: hello world
// const logger = (head) => {
//   return (message) => {
//     head.concat(message)
//   }
// }
