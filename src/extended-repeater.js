const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // The str and addition parameters are strings by default. In case when type of these parameters is different, they must be converted to a string.
  str = String(str);
  let addition = options.addition !== undefined ? String(options.addition) : '';

  let separator = options.separator !== undefined ? options.separator : '+';
  let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';
  let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;

  let stringsArray = [];

  // Repeat the str with addition
  for (let i = 0; i < repeatTimes; i++) {
    let strRepeat = str;
    if (addition !== '') {
      for (let j = 0; j < additionRepeatTimes; j++) {
        strRepeat += addition;
        if (j < additionRepeatTimes - 1) {
          strRepeat += additionSeparator;
        }
      }
    }
    stringsArray.push(strRepeat);
  }

  // Join the repeated strings with separator
  let result = stringsArray.join(separator);

  return result;
}


module.exports = {
  repeater
};
