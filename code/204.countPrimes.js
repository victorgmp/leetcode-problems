/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
  const primes = [];
  let primeCount = 0;

  for (let i = 0; i < n; i++) {
    primes.push(true);
  }

  for (let i = 2; i * i < primes.length; i++) {
    if (primes[i]) {
      for (let j = i; j * i < primes.length; j++) {
        primes[i * j] = false;
      }
    }
  }

  for (let i = 2; i < primes.length; i++) {
    if (primes[i]) {
      primeCount += 1;
    }
  }

  return primeCount;
};

const n = 10;
console.log(countPrimes(n));
