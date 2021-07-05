/**
 * @param {number} x
 * @return {number}
 */

const reverse = (x) => {
  let number = x;
  const negative = x < 0;
  let reversed = 0;

  if (negative) {
    number *= -1;
  }

  while (number > 0) {
    reversed = (reversed * 10) + (number % 10);
    number = Math.floor(number / 10);
  }

  if (reversed > (2 ** 31 - 1)) {
    return 0;
  }

  return negative ? (reversed * -1) : reversed;
};

console.log(reverse(214));
