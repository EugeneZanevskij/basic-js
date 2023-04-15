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
  const numStr = n.toString();
  const updatedNumArray = [];
  for (let i = 0; i < numStr.length; i++) {
    const updatedNumStr = numStr.slice(0, i) + numStr.slice(i + 1);
    updatedNumArray.push(+updatedNumStr);
  }
  console.log(updatedNumArray);
  const numMax = Math.max(...updatedNumArray);
  return numMax;
}

console.log(deleteDigit(109));

module.exports = {
  deleteDigit
};
