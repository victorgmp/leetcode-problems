/* eslint-disable no-restricted-syntax */
/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs) => {
  let common = '';

  if (strs.length === 0) {
    return common;
  }

  const firstWord = strs[0];
  let index = 0;

  for (const letter of firstWord) {
    for (let i = 1; i < strs.length; i++) {
      const currentWord = strs[i];
      const currentLetter = currentWord.charAt(index);
      if (letter !== currentLetter || index > currentWord.length) {
        return common;
      }
    }
    index += 1;
    common += letter;
  }
  return common;
};

// const strs = ['a'];
// const strs = ['flower', 'flower', 'flower', 'flower'];
const strs = ['flower', 'flow', 'flight'];
// const strs = ['car', 'carrace', 'carro'];
console.log(longestCommonPrefix(strs));
