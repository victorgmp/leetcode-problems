/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointer] = nums[i];
      pointer += 1;
    }
  }

  return pointer;
};

// const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const nums = [3, 2, 2, 3];
console.log(removeElement(nums, 3));
