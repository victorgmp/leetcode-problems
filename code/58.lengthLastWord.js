/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  let counter = 0;
  let beforeFirstNonEmptyChar = true;

  if (s.length === 0) return counter;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) !== ' ') {
      counter += 1;
      beforeFirstNonEmptyChar = false;
    } else if (!beforeFirstNonEmptyChar) {
      break;
    }
  }

  return counter;
};

const text = 'hello world ';
console.log(lengthOfLastWord(text));
