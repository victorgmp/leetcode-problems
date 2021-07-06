/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);

    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }

  return maxGlobal;
};

const nums = [-1, 2, 3, -5, 4];
console.log(maxSubArray(nums));
