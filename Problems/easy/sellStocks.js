// Input: prices = [7,1,5,3,6,4] // Output: 5
// Input: prices = [7,6,4,3,1] // Output: 0

// const prices = [7, 6, 4, 3, 1];
const prices = [7, 1, 5, 3, 6, 4];
// const prices = [0, 7, 1, 5, 3, 4];
// const prices = [3, 8, 6, 7, 1, 9];
// const prices = [1];
// const prices = [2, 4, 1];
// const prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 5, 7, 4, 2, 9, 2];

var maxProfit = function (prices) {
  let buy = 0;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[buy]) {
      buy = i;
    } else {
      profit = Math.max(prices[i] - prices[buy], profit);
    }
  }
  return profit;
};
console.log(maxProfit(prices));
