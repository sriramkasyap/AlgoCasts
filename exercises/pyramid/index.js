// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   let midindex = Math.floor((2 * n - 1) / 2);

//   for (let i = 0; i < n; i++) {
//     let level = "";
//     for (let j = 0; j < 2 * n - 1; j++) {
//       if (j >= midindex - i && j <= midindex + i) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }

function pyramid(n, row = 0, level = "") {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  let midindex = Math.floor((2 * n - 1) / 2);

  if (level.length >= midindex - row && level.length <= midindex + row) {
    pyramid(n, row, level + "#");
  } else {
    pyramid(n, row, level + " ");
  }
}

module.exports = pyramid;
