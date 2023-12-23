const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = []
  n = n.toString().split('')
  let i = 0
  while (i < n.length) {
    let str = ''
    for (let j = 0; j < n.length; j++) {
      if (j !== i) {
        str += n[j]
      }
    }
    numbers.push(Number(str))
    i += 1
  }
  return numbers.sort((a, b) => b - a)[0]
}

module.exports = {
  deleteDigit
};
