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
  const map = new Map();
    let count = 0;

    // Create a map to store character counts in s1
    for (const char of s1) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    // Iterate through characters in s2
    // and decrement the count in the map if a common character is found
    for (const char of s2) {
        if (map.has(char) && map.get(char) > 0) {
            count++;
            map.set(char, map.get(char) - 1);
        }
    }

    return count;
}
console.log(getCommonCharacterCount("hello", "world"));

module.exports = {
  getCommonCharacterCount
};
