const sortArray = (arr) => {
  let swap = false;
  let done = false;

  let swapped;

  while (!done) {
    swapped = 0;
    for (let i = 1; i < arr.length; i++) {
      // comparing
      if (arr[i] > arr[i - 1]) {
        // swapping
        swap = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = swap;
        swapped = 1;
      }
      if (swapped === 0) {
        done = true;
      }
    }
  }
  return arr;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sortArray(arr));
