/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  let carry = 0;
  const maxLength = Math.max(a.length, b.length);
  const result = Array(maxLength).fill(0);

  let i = 0;

  while (i < maxLength) {
    const sum = (a.length - 1 - i < 0 ? 0 : a[a.length - 1 - i] * 1)
      + (b.length - 1 - i < 0 ? 0 : b[b.length - 1 - i] * 1)
      + carry;
    result[maxLength - 1 - i] = sum % 2;
    carry = Math.floor(sum / 2);

    i += 1;
  }

  if (carry > 0) {
    result.unshift(1);
  }

  return result.join('');
};

const a = '11';
const b = '1';
console.log(addBinary(a, b));
