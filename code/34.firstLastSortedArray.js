/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  const n = nums.length - 1;

  const bs = (isLeft) => {
    let left = 0;
    let right = n;

    while (right > left) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] > target || (isLeft && nums[mid] === target)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };

  const begin = bs(true);
  if (begin === n || nums[begin] !== target) {
    return [-1, -1];
  }
  const end = bs(false);
  return [begin, end - 1];
};

// const nums = [7];
const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
console.log(searchRange(nums, target));
