/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  const countingFunc = (stairsRemaining, savedResults) => {
    if (stairsRemaining < 0) {
      return 0;
    }

    if (stairsRemaining === 0) {
      return 1;
    }

    if (savedResults[stairsRemaining]) {
      return savedResults[stairsRemaining];
    }

    savedResults[stairsRemaining] = countingFunc(stairsRemaining - 1, savedResults)
      + countingFunc(stairsRemaining - 2, savedResults);

    return savedResults[stairsRemaining];
  };

  return countingFunc(n, {});
};

const n = 4;
console.log(climbStairs(n));
