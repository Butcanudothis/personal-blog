---
title: Maximum Product Subarray
date: '2023-04-28'
---

[https://leetcode.com/problems/maximum-product-subarray/description/](https://leetcode.com/problems/maximum-product-subarray/description/)

The Maximum Product Subarray problem involves finding the contiguous subarray within an array that has the largest product. This problem is a variation of the Maximum Subarray problem, which is solved using Kadane's Algorithm.

## Approach

We can solve the Maximum Product Subarray problem by maintaining two variables `prod1` and `prod2`, where `prod1` stores the maximum product of subarray ending at the current index, and `prod2` stores the minimum product of subarray ending at the current index. We update these variables as we traverse the array from left to right.

At each index `i`, we compute three values:

- `nums[i]`
- `prod1 * nums[i]`
- `prod2 * nums[i]`

We update `prod1` to be the maximum of these three values, and update `prod2` to be the minimum of these three values. This approach ensures that `prod1` always stores the maximum product of subarray ending at index `i`, and `prod2` always stores the minimum product of subarray ending at index `i`. We also maintain a variable `result` to store the maximum product we have seen so far.

## Solution

```
class Solution {
    public int maxProduct(int[] nums) {
        int prod1 = nums[0], prod2 = nums[0], result = nums[0];

        for(int i = 1; i < nums.length; i++) {
            int a = prod1 * nums[i];
            int b = prod2 * nums[i];
            prod1 = Math.max(nums[i], Math.max(a, b));
            prod2 = Math.min(nums[i], Math.min(a, b));
            result = Math.max(result, prod1);
        }
        return result;
    }
}

```

## Line by line explanation

1. We define a class `Solution` with a method `maxProduct` that takes an integer array `nums` as input and returns an integer value.
2. We initialize three variables `prod1`, `prod2`, and `result` to be the first element of the array `nums`.
3. We loop through the array `nums` from index `1` to `nums.length-1`.
4. We compute two variables `a` and `b` to store the product of `prod1` and `nums[i]`, and `prod2` and `nums[i]`, respectively.
5. We update `prod1` to be the maximum of `nums[i]`, `a`, and `b`, and update `prod2` to be the minimum of `nums[i]`, `a`, and `b`.
6. We update `result` to be the maximum of `result` and `prod1`.
7. After the loop, we return `result`.

## Time and Space complexity

The time complexity of this solution is O(n), where n is the length of the input array `nums`. This is because we traverse the array once.

The space complexity of this solution is O(1), as we only use constant extra space to store variables `prod1`, `prod2`, and `result`.
