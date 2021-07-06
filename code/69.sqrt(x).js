/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
  let left = 1;
  let right = x;

  if (x < 2) {
    return x;
  }

  while (right > left) {
    // const mid = left + Math.floor((right - left) / 2);
    const mid = Math.floor((left + right) / 2);

    if (mid * mid === x) {
      return mid;
    } if (mid * mid > x) {
      right = mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    }
  }

  return left - 1;
};

const x = 8;
console.log(mySqrt(x));
