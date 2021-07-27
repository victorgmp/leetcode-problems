/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  const values = {};

  for (let i = 0; i < numbers.length; i++) {
    const currentValue = numbers[i];
    const neededValue = target - currentValue;
    const valueIndex = values[neededValue];

    if (valueIndex != null) {
      return [valueIndex, i + 1];
    }
    values[currentValue] = i + 1;
  }
  return [];
};

const twoSum2 = (numbers, target) => {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;
  const result = [];

  while (leftPointer < rightPointer) {
    const leftElement = numbers[leftPointer];
    const rightElement = numbers[rightPointer];

    if (leftElement + rightElement === target) {
      result.push(leftPointer + 1);
      result.push(rightPointer + 1);
      break;
    } else if (leftElement + rightElement > target) {
      rightPointer -= 1;
    } else {
      leftPointer += 1;
    }
  }

  return result;
};

const numbers = [2, 15, 11, 7, 20];
const target = 9;
console.log(twoSum2(numbers, target));
