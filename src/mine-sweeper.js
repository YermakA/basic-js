const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
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

  matrix = matrix.map(
    (el) => {
      el.push(false)
      el.unshift(false)
      return el
    })
  matrix.push(Array(matrix[0].length).fill(false))
  matrix.unshift(Array(matrix[0].length).fill(false))
  let mtx = JSON.parse(JSON.stringify(matrix))

  for (let i = 1; i < matrix.length - 1; i++) {
    let j = 1
    for (; j <= matrix.length - 1; j++) {
      let count = 0
      if (matrix[i + 1][j]) {
        count += 1
      }
      if (matrix[i][j + 1]) {
        count += 1
      }
      if (matrix[i - 1][j]) {
        count += 1
      }
      if (matrix[i][j - 1]) {
        count += 1
      }
      if (matrix[i + 1][j + 1]) {
        count += 1
      }
      if (matrix[i + 1][j - 1]) {
        count += 1
      }
      if (matrix[i - 1][j + 1]) {
        count += 1
      }
      if (matrix[i - 1][j - 1]) {
        count += 1
      }
      mtx[i][j] = count
    }
  }
  mtx.pop()
  mtx.shift()
  return mtx.map((el) => {
    el.pop()
    el.shift()
    return el
  })

}
module.exports = {
  minesweeper
};
