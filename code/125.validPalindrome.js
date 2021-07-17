const isValidCharacter = (char) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';

  return alphabet.indexOf(char.toLowerCase()) > -1;
};

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 < p2) {
    while (!isValidCharacter(s.charAt(p1))) {
      p1 += 1;
    }

    while (!isValidCharacter(s.charAt(p2))) {
      p2 -= 1;
    }

    if (s.charAt(p1).toLowerCase() !== s.charAt(p2).toLowerCase()) {
      return false;
    }

    p1 += 1;
    p2 -= 1;
  }

  return true;
};

const s = 'A man, a plan, a canal: Panama';
console.log(isPalindrome(s));
