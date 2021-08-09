/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (numsMap[num]) {
      return true;
    }

    numsMap[num] = 1;
  }

  return false;
};

// const containsDuplicate = (nums) => {
//   const numbers = new Set();

//   for (const num of nums) {
//     if (!numbers.has(num)) {
//       numbers.add(num);
//     } else {
//       return true;
//     }
//   }

//   return false;
// };

const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
