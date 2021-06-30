/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  let first = m - 1;
  let second = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (second < 0) {
      break;
    }

    if (first >= 0 && nums1[first] > nums2[second]) {
      nums1[i] = nums1[first];
      first -= 1;
    } else {
      nums1[i] = nums2[second];
      second -= 1;
    }
  }
  return nums1;
};

const nums11 = [1, 2, 3, 0, 0, 0];
const mm = 3;
const nums22 = [2, 5, 6];
const nn = 3;

console.log(merge(nums11, mm, nums22, nn));
