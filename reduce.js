function countWords(inputs) {
  return inputs.reduce((mainObj, word) => {
    mainObj[word] = mainObj[word] + 1 || 1;
    return mainObj;
  }, {});
}

module.exports = countWords;

// const obj = {
//   apple: 1,
//   banana: 3
// };

// official solution
// function countWords(arr) {
//   return arr.reduce(function(countMap, word) {
//     countMap[word] = ++countMap[word] || 1; // increment or initialize to 1
//     return countMap;
//   }, {}); // second argument to reduce initialises countMap to {}
// }
