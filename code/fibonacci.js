// iterative
const fib = (n) => {
  if (n <= 0) {
    return 0;
  } if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(5));

// recursive
const fibMemo = (n, memo = []) => {
  if (n <= 1) {
    return n;
  }
  memo[n] = fibMemo(n - 1) + fibMemo(n - 2);

  return memo[n];
};

console.log('recursive', fibMemo(5));
