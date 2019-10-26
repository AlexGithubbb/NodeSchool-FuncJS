function daddyFunc(sonFunc, num) {
  // if (num <= 0) {
  //   return null;
  // } else {
  //   for (let i = 0; i < num; i++) {
  //     sonFunc();
  //   }
  // }
  if (num <= 0) return;
  sonFunc();
  return daddyFunc(sonFunc, --num);
}

// function sonFunc() {
//   return console.log('run me');
// }

module.exports = daddyFunc;
