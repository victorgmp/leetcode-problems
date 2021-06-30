/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = (x) => {
  if (x < 0) return false;

  let number = x;
  let reversed = 0;

  while (number > 0) {
    reversed = (reversed * 10) + (number % 10);
    number = Math.floor(number / 10);
  }

  if (reversed > (2 ** 31 - 1)) {
    return false;
  }

  return x === reversed;
};

console.log(isPalindrome(121));
