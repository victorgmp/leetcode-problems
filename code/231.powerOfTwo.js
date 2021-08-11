/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = (n) => {
  if (n < 1) return false;

  let powerOfTwo = 1;

  while (powerOfTwo < n) {
    powerOfTwo *= 2;
  }

  return powerOfTwo === n;
};

const n = 16;
console.log(isPowerOfTwo(n));
