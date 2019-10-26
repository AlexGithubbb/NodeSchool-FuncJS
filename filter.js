// const getShortMessage = messages => {
//   var filtered = messages.filter(item => item.message.length < 50);
//   let results = [];
//   for (message of filtered) {
//     results.push(message.message);
//   }
//   return results;
// };
// module.exports = getShortMessage;

// double map
const getShortMessage = messages => {
  var filteredMassage = messages
    .filter(message => message.message.length < 50)
    .map(item => item.message);
  return filteredMassage;
};

module.exports = getShortMessage;
