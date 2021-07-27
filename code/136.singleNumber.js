/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }

  return Array.from(set)[0];
};

const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
