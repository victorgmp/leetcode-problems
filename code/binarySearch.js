// recursive
const binarySearchRecursive = (arr = [], x, left, right) => {
  if (left > right) {
    return false;
  }

  const mid = left + Math.floor((right - left) / 2);
  if (arr[mid] === x) {
    return x;
  } if (x < arr[mid]) {
    return binarySearchRecursive(arr, x, left, mid - 1);
  }
  return binarySearchRecursive(arr, x, mid + 1, right);
};

// iterative
const binarySearchIterative = (arr = [], x) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === x) {
      return x;
    } if (x < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};

const arr = [2, 5, 6, 10, 15, 18, 40];
const x = 18;
const left = 0;
const right = arr.length - 1;
console.log(binarySearchRecursive(arr, x, left, right));
console.log(binarySearchIterative(arr, x));
