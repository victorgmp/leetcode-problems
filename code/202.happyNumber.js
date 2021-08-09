/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
  const seen = new Set();

  while (!seen.has(n)) {
    seen.add(n);
    let sqSum = 0;

    while (n > 0) {
      sqSum += (n % 10) * (n % 10);
      n = Math.floor(n / 10);
    }
    if (sqSum == 1) {
      return true;
    }
    n = sqSum;
  }
  return false;
};

const n = 19;
console.log(isHappy(n));
