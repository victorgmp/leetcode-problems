/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (!needle) return 0;

  let i = 0;
  while ((haystack.substring(i, needle.length + i) !== needle) && i <= haystack.length) {
    i += 1;
  }
  return i > haystack.length ? -1 : i;
};

const haystack = 'hello';
const needle = 'll';
console.log(strStr(haystack, needle));
