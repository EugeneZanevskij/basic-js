const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  for (let domain of domains) {
    let dns = '';
    let elements = domain.split('.');
    for (let i = elements.length - 1; i>=0; i--) {
      dns += `.${elements[i]}`;
      if (result.hasOwnProperty(dns)) {
        result[dns]++;
      } else {
        result[dns] = 1;
      }
    };
  }
  return result;
}

// console.log(getDNSStats([
//   'code.yandex.ru',
//   'music.yandex.ru',
//   'yandex.ru'
//   ]));

module.exports = {
  getDNSStats
};
