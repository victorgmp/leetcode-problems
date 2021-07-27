/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = (n) => {
  let numberOfFives = 0;

  while (n >= 5) {
    numberOfFives += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }

  return numberOfFives;
};

const n = 5;
console.log(trailingZeroes(n));
