const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  s1 = s1.split("")
  s2 = s2.split("")
  s1 = s1.filter((el) => s2.includes(el))
  s2 = s2.filter((el) => s1.includes(el)).join('')
  let lengthStart = s2.length
  s1.forEach((el) => {
    s2 = s2.replace(el, "")
  })
  return lengthStart - s2.length
}

module.exports = {
  getCommonCharacterCount
};
