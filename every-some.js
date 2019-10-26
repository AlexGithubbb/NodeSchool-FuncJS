// function checkUsersValid(goodUsers) {
//   return function allUsersValid(submittedUsers) {
//     // SOLUTION GOES HERE
//     var array1 = goodUsers.map(item => item.id);
//     return (array2 = submittedUsers
//       .map(item => item.id)
//       .every(value => array1.includes(value)));
//   };
// }

// module.exports = checkUsersValid;

// official solution
// module.exports = function checkUsersValid(goodUsers) {
//   return function allUsersValid(submittedUsers) {
//     return submittedUsers.every(function (submittedUser){
//       return goodUsers.some(function (goodUser) {
//         return goodUser.id === submittedUser.id
//       })
//     })
//   }
// }

const checkUsersValid = goodUsers =>
  (allUsersValid = submittedUsers =>
    submittedUsers.every(submittedUser =>
      goodUsers.some(goodUser => goodUser.id === submittedUser.id)
    ));

module.exports = checkUsersValid;
