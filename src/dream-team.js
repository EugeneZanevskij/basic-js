const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let membersFilter = members.filter((member) => typeof member === "string");
    let membersMap = membersFilter.map((member) => member.trimStart()[0].toUpperCase()).sort();
    let dreamTeam = membersMap.join("");
    return dreamTeam;
  } else return false;
}

console.log(createDreamTeam([
  'Amelia',
        null,
        undefined,
        'Ruby',
        'Lily',
        11,
        'Grace',
        22,
        'Millie',
        'Daisy',
        true,
        'Freya',
        false,
        'Erin',
        new Set([1, 2, 3, 4, 5]),
        'Megan',
        {
          'John': 'Smith'
        },
        'Jasmine',
        1,
        2,
        3,
        4,
        5,
        'Brooke',
]));

module.exports = {
  createDreamTeam
};
