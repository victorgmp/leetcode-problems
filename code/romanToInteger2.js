/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const currentInt = map[s.charAt(i)];
    const nextInt = map[s.charAt(i + 1)];
    console.log('hola');

    if (nextInt) {
      if (currentInt >= nextInt) {
        total += currentInt;
      } else {
        total += (nextInt - currentInt);
        i += 1;
      }
    } else {
      total += currentInt;
    }
  }
  return total;
};

console.log(romanToInt('IV'));
