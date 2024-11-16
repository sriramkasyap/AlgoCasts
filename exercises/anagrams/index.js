// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   let a = stringA.replace(/[^\w]/, "").toLowerCase().split("").sort().join("");
//   let b = stringB.replace(/[^\w]/, "").toLowerCase().split("").sort().join("");

//   return a === b;
// }

function anagrams(stringA, stringB) {
  let charMapA = buildCharMap(stringA);
  let charMapB = buildCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) return false;
  }

  return true;
}

function buildCharMap(string) {
  let charMap = {};

  for (let char of string.replace(/[^\w]/, "").toLowerCase()) {
    charMap[char] = 1 + (charMap[char] || 0);
  }

  return charMap;
}

module.exports = anagrams;
