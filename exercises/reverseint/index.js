// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   return n >= 0
//     ? parseInt(n.toString().split("").reverse().join(""))
//     : parseInt(n.toString().split("").reverse().join("")) * -1;
// }

// function reverseInt(n) {
//   let nar = Math.abs(n).toString().split("");
//   return (
//     nar.reduce((result, digit, index) => {
//       return result + parseInt(digit) * Math.pow(10, index);
//     }, 0) * (n >= 0 ? 1 : -1)
//   );
// }

function reverseInt(n) {
  let i = Math.abs(n);
  let reverseN = 0;
  while (i !== 0) {
    reverseN = reverseN * 10 + (i % 10);
    i = Math.floor(i / 10);
  }
  return reverseN * (n < 0 ? -1 : 1);
}

module.exports = reverseInt;
