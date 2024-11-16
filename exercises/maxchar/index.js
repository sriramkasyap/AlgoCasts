// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let countMap = {};
  let maxChar = null;
  for (let char of str) {
    countMap[char] = 1 + (countMap[char] || 0);
    if (!maxChar) maxChar = char;
    if (countMap[char] > countMap[maxChar]) maxChar = char;
  }

  return maxChar;
}

module.exports = maxChar;
