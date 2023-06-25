---
title : 'Best Time to Buy and Sell Stock'
date: '2023-04-22'
---

The Best Time to Buy and Sell Stock problem is a popular coding interview question that requires finding the maximum profit that can be earned by buying and selling a stock at certain days. In this article, we will discuss the approach to solve this problem and implement the solution in Java.

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

## Approach

The idea behind this problem is to find the minimum price to buy the stock and the maximum price to sell it at the right time. To do that, we will iterate through the array of stock prices, and for each day, we will check if the price on that day is the minimum price seen so far. If so, we update the minimum price. If not, we check if the difference between the current price and the minimum price is greater than the maximum profit seen so far. If it is, we update the maximum profit.

## Solution

We can implement the approach in Java as follows:

```java
class Solution {
    public int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;
        for (int i = 0; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            } else if (prices[i] - minPrice > maxProfit) {
                maxProfit = prices[i] - minPrice;
            }
        }
        return maxProfit;
    }
}

```

The above code iterates through the array of prices, and at each step, it updates the minimum price seen so far and the maximum profit seen so far. It then returns the maximum profit.

## Line by Line Explanation

Here is a line-by-line explanation of the code:

```
public int maxProfit(int[] prices) {

```

This line declares a public method named `maxProfit` that takes an integer array called `prices` as input and returns an integer.

```
int minPrice = Integer.MAX_VALUE;
int maxProfit = 0;

```

These two lines initialize two integer variables: `minPrice` is set to the maximum possible integer value using `Integer.MAX_VALUE`, and `maxProfit` is set to 0.

```
for (int i = 0; i < prices.length; i++) {

```

This line starts a `for` loop that will iterate over each element of the `prices` array.

```
if (prices[i] < minPrice) {
    minPrice = prices[i];
}

```

This `if` statement checks if the current element of the `prices` array, at index `i`, is less than the current minimum price stored in `minPrice`. If it is, then `minPrice` is updated to the current element of `prices`.

```
else if (prices[i] - minPrice > maxProfit) {
    maxProfit = prices[i] - minPrice;
}

```

If the current element of `prices` is not less than `minPrice`, then this `else if` statement checks if the difference between the current element of `prices` and `minPrice` is greater than the current `maxProfit`. If it is, then `maxProfit` is updated to the difference between the current element of `prices` and `minPrice`.

```
}

```

This curly brace ends the `for` loop.

```
return maxProfit;

```

This line returns the final value of `maxProfit`.

## Time and Space Complexity

The time complexity of this solution is O(n), where n is the length of the input array. This is because we only iterate through the array once. The space complexity of this solution is O(1), as we only use two variables to store the minimum price and maximum profit seen so far.

In conclusion, we have discussed the approach to solve the Best Time to Buy and Sell Stock problem and implemented the solution in Java. We have also analyzed the time and space complexity of the solution.