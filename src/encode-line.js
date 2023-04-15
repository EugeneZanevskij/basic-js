const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let i = 0;
  let newStr = '';
  while (i<str.length) {
    let count = 1;
    while (str[i] === str[i+1]) {
      count++;
      i++;
    }
    newStr += `${count===1?'':count}${str[i]}`;
    i++;
  }
  return newStr;
}

// console.log(encodeLine('aabbbc'));

module.exports = {
  encodeLine
};
