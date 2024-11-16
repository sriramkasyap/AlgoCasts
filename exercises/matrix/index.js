// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let result = new Array(n);

  for (let inc = 0; inc < n; inc++) {
    result[inc] = new Array(n).fill(0);
  }

  let i = 1,
    startRow = 0,
    startColumn = 0,
    endRow = n - 1,
    endColumn = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let j = startColumn; j <= endColumn; j++) {
      result[startRow][j] = i;
      i++;
    }
    startRow++;

    for (let j = startRow; j <= endRow; j++) {
      result[j][endColumn] = i;
      i++;
    }
    endColumn--;

    for (let j = endColumn; j >= startColumn; j--) {
      result[endRow][j] = i;
      i++;
    }
    endRow--;

    for (let j = endRow; j >= startRow; j--) {
      result[j][startColumn] = i;
      i++;
    }
    startColumn++;
  }

  return result;
}

module.exports = matrix;
