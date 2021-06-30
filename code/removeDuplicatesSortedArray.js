/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  if (!nums.length) {
    return 0;
  }

  let pointer = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[pointer] !== nums[i]) {
      pointer += 1;
      nums[pointer] = nums[i];
    }
  }
  console.log(nums);
  return pointer + 1;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
