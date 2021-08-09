/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
  const p = pattern.split('');
  const str = s.split(' ');

  if (p.length !== str.length) return false;

  const charToWord = {};
  const wordTochar = {};

  for (let i = 0; i < str.length; i++) {
    const curWord = str[i];
    const curLetter = p[i];

    if (charToWord[curLetter] !== undefined && charToWord[curLetter] !== curWord) {
      return false;
    }

    if (wordTochar[curWord] !== undefined && wordTochar[curWord] !== curLetter) {
      return false;
    }

    wordTochar[curWord] = curLetter;
    charToWord[curLetter] = curWord;
  }

  return true;
};

const pattern = 'abba';
const s = 'cat dog dog cat';

console.log(wordPattern(pattern, s));
