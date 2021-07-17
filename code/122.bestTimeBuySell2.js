/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  // let minBuyPrice = Infinity;
  let profit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i];
    }
  }

  return profit;
};

const prices = [7, 1, 5, 3, 6, 7];
console.log(maxProfit(prices));
