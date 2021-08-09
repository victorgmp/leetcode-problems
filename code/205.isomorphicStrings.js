/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = {};
  const tMap = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (sMap[sChar] === undefined) {
      sMap[sChar] = tChar;
    }

    if (tMap[tChar] === undefined) {
      tMap[tChar] = sChar;
    }

    if (sMap[sChar] !== tChar || tMap[tChar] !== sChar) {
      return false;
    }
  }
  return true;
};

const s = 'abc';
const t = 'xyz';
console.log(isIsomorphic(s, t));
