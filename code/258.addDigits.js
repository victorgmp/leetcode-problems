/* eslint-disable no-param-reassign */
/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
  let sum = 0;

  while (num >= 10) {
    sum += num % 10;
    num = Math.floor(num / 10);

    if (num < 10) {
      num += sum;
      sum = 0;
    }
  }

  return num;
};

const num = 388;
console.log(addDigits(num));
