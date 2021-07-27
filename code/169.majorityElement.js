/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }

  const half = nums.length / 2;

  const elementCount = new Map();

  for (const num of nums) {
    if (!elementCount.has(num)) {
      elementCount.set(num, 1);
    } else {
      elementCount.set(num, elementCount.get(num) + 1);
    }

    if (elementCount.get(num) > half) {
      return num;
    }
  }

  return -1;
};

const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
