/**
 * @param {number[]} nums
 * @return {boolean}
 */
// const containsNearbyDuplicate = (nums, k) => {
//   const numsMap = {};

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];

//     if (numsMap[num] !== undefined && i - numsMap[num] <= k) {
//       return true;
//     }

//     numsMap[num] = i;
//   }
//   return false;
// };

const containsNearbyDuplicate = (nums, k) => {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (numsMap.has(num) && i - numsMap.get(num) <= k) {
      return true;
    }

    numsMap.set(num, i);
  }
  return false;
};

const nums = [1, 2, 3, 1, 2, 3];
const k = 2;
console.log(containsNearbyDuplicate(nums, k));
