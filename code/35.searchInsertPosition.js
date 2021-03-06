/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length;
  while (right > left) {
    // Add index calculation below
    const index = Math.floor((left + right) / 2);
    console.log('index', index);
    console.log(nums[index]);
    if (nums[index] === target) {
      return index;
    }
    if ((nums[index] < target) && (nums[index + 1] > target)) {
      return index + 1;
    }
    if (nums[index] < target && index === nums.length - 1) {
      return index + 1;
    }
    if (nums[0] > target) {
      return 0;
    }

    if (target > nums[index]) {
      left = index + 1;
    } else {
      right = index;
    }
  }
};

const nums = [1, 3, 5, 6];
const target = 2;
console.log(searchInsert(nums, target));
