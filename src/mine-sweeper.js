const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular matrixweeper game you have a mines with some matrix and those cells
 * that don't contain a mine have a number in it that indicates the total number of matrix
 * in the neighboring cells. Starting off with some arrangement of matrix
 * we want to create a matrixweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const mines = [];

  for (let i = 0; i < rows; i++) {
    mines[i] = Array(columns).fill(0);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j]) {
        // Update the count of neighboring cells (excluding matrix)
        for (let row = i - 1; row <= i + 1; row++) {
          for (let col = j - 1; col <= j + 1; col++) {
            if (row < 0 || row >= rows || col < 0 || col >= columns) continue;
            if (matrix[row][col]) {
              mines[row][col] = 1;
              continue;
            }
            mines[row][col]++;
          }
        }
      }
    }
  }

  return mines;
}

console.log(minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false]
  ]));

module.exports = {
  minesweeper
};
