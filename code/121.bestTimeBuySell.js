/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let minBuyPrice = Infinity;
  let profit = 0;

  for (const price of prices) {
    if (price < minBuyPrice) {
      minBuyPrice = price;
    } else if (price - minBuyPrice > profit) {
      profit = price - minBuyPrice;
    }
  }

  return profit;
};

const prices = [2, 4, 1];
console.log(maxProfit(prices));
