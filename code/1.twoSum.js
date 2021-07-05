/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const values = {};

  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    const neededValue = target - currentValue;
    const valueIndex = values[neededValue];

    if (valueIndex != null) {
      return [valueIndex, i];
    }
    values[currentValue] = i;
  }
  return [];
};

const nums = [2, 15, 11, 7, 20];
const target = 9;
console.log(twoSum(nums, target));
