const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  function calculateTurns() {
    let turns = 2**disksNumber - 1;
    // let turns = 1;
    // for (let i = 0; i < disksNumber; i++) {
    //   turns *= 2;
    // }
    // turns -= 1;
    return turns;
  }
  turns = calculateTurns();
  function calculateSeconds() {
    let seconds = Math.floor(turns / turnsSpeed * 3600);
    return seconds;
  }
  seconds = calculateSeconds();
  result["turns"] = turns;
  result["seconds"] = seconds;
  return result;
};

console.log(calculateHanoi(5, 4074));

module.exports = {
  calculateHanoi
};
