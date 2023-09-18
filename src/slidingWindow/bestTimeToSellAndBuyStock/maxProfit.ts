export function maxProfit(prices: Array<number>) {
  let maxProfit = 0;
  let minPrice = Infinity;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    if (price < minPrice) {
      minPrice = price;
    } else {
      const profit = price - minPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}
