/* eslint-disable no-restricted-syntax */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// const isAnagram = (s, t) => {
//   if (s.length !== t.length) { return false; }

//   const tempString1 = s.toLowerCase();
//   let tempString2 = t.toLowerCase();

//   const matched = true;
//   let cnt = 0;

//   while (tempString1.length) {
//     if (tempString2.length < 1) {
//       break;
//     }

//     if (tempString2.indexOf(tempString1[cnt]) > -1) {
//       tempString2 = tempString2.replace(tempString1[cnt], '');
//     } else {
//       return false;
//     }

//     cnt += 1;
//   }

//   return matched;
// };

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const tempString1 = s.toLowerCase();
  const tempString2 = t.toLowerCase();

  const letterCount = {};

  for (const letter of tempString1) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }

  for (const letter of tempString2) {
    if (letterCount[letter] === undefined) {
      return false;
    }

    if (letterCount[letter] < 1) {
      return false;
    }

    letterCount[letter] -= 1;
  }

  return true;
};

console.log(isAnagram('Army', 'Mary'));
