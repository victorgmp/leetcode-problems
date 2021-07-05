/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // isBadVersion(n);
    let left = 0;
    let right = n;

    while (right > left) {
      // Add index calculation below
      const index = Math.floor((left + right) / 2);

      if (!isBadVersion(index)) {
        left = index + 1;
      } else {
        right = index;
      }
    }

    return left;
  };
};

const isBadVersion = (version) => {
  const bad = 4;
  if (version === bad) {
    return true;
  }
  return false;
};

console.log(solution(isBadVersion));
