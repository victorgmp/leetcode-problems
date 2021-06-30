/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const tempArray = [];

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'I':
        tempArray.push(1);
        break;
      case 'V':
        tempArray.push(5);
        break;
      case 'X':
        tempArray.push(10);
        break;
      case 'L':
        tempArray.push(50);
        break;
      case 'C':
        tempArray.push(100);
        break;
      case 'D':
        tempArray.push(500);
        break;
      case 'M':
        tempArray.push(1000);
        break;
      default:
        console.log('Enter a valid roman number');
        break;
    }
  }

  let p1 = 0;
  let num = 0;

  for (let j = 0; j < tempArray.length; j++) {
    if (tempArray[p1] < tempArray[p1 + 1]) {
      num += (tempArray[p1 + 1] - tempArray[p1]);
      p1 += 2;
    } else if (tempArray[p1] !== undefined) {
      num += tempArray[p1];
      p1 += 1;
    }
  }

  return num;
};

console.log(romanToInt('MCMXCIV'));
