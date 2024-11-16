// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//   let words = str.split(" ");

//   return words.reduce((result, word, i) => {
//     return (
//       result + (i === 0 ? "" : " ") + word[0].toUpperCase() + word.slice(1)
//     );
//   }, "");
// }

// function capitalize(str) {
//   let stringArray = str.split("");
//   for (let index in stringArray) {
//     let i = parseInt(index);

//     if (i === 0 || str[i - 1] === " ") {
//       stringArray[i] = stringArray[i].toUpperCase();
//     }
//   }

//   return stringArray.join("");
// }

function capitalize(str) {
  return str.replace(/(\b\w)/g, (char) => char.toUpperCase());
}

module.exports = capitalize;
