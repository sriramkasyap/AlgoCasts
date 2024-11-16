// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   return str.split("").reduce((sum, char) => {
//     char = char.toLowerCase();
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       sum++;
//     }

//     return sum;
//   }, 0);
// }

// function vowels(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let vowel of vowels) {
//     if (str.toLowerCase().includes(vowel)) {
//       count++;
//     }
//   }

//   return count;
// }

function vowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}

module.exports = vowels;
