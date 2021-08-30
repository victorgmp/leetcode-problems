/* eslint-disable no-param-reassign */
/**
 * @param {number} n
 * @return {boolean}
 */

// const isUgly = (n) => {
//   if (n < 1) return false;

//   const factors = [2, 3, 5];

//   for (const factor of factors) {
//     while (n % factor === 0) n /= factor;
//   }
//   return n === 1;
// };

const isUgly = (n) => {
  if (n < 1) return false;

  while (n % 2 === 0) n /= 2;
  while (n % 3 === 0) n /= 3;
  while (n % 5 === 0) n /= 5;

  console.log('n', n);

  return n === 1;
};

const n = (6);
console.log(isUgly(n));
