---
title: 'Product of Array Except Self'
date: '2023-04-25'
---
[https://leetcode.com/problems/product-of-array-except-self/description/](https://leetcode.com/problems/product-of-array-except-self/description/)

## Approach

Given an integer array `nums`, the task is to find an array `arr` such that each `arr[i]` is the product of all elements in `nums` except for `nums[i]`.

To solve this problem, we can use a two-pass algorithm. In the first pass, we calculate the product of all elements to the left of each element. In the second pass, we calculate the product of all elements to the right of each element. Finally, we multiply the products of left and right subarrays for each element to get the result.

## Solution

The solution uses two passes over the input array. In the first pass, we compute the product of all elements to the left of each element and store it in the result array `arr`. In the second pass, we traverse the array from right to left and compute the product of all elements to the right of each element. We then multiply the product of left and right subarrays for each element to get the final result.

```
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int arr []= new int[nums.length];
        int product = 1;
        //left to right
        for (int i = 0; i < nums.length; i++) {
            arr[i] = product;
            product *= nums[i];
        }
        // traverse the array again, and multiply the product of all the numbers after the current number
        product = 1;
        for (int i = nums.length - 1; i >= 0; i--) {
            arr[i] *=product;
            product *= nums[i];
        }
        return arr;
    }
}

```

## Line by Line Explanation

- We create a new integer array `arr` with the same length as the input array `nums`.
- We initialize a variable `product` to 1, which we will use to compute the product of elements to the left and right of each element.
- We traverse the array `nums` from left to right using a `for` loop. For each element, we set the corresponding element in `arr` to `product`, and then multiply `product` by the current element in `nums`.
- We traverse the array `nums` from right to left using another `for` loop. For each element, we multiply the corresponding element in `arr` by `product`, and then multiply `product` by the current element in `nums`.
- We return the resulting array `arr`.

## Time and Space Complexity

The time complexity of the solution is O(n), where n is the length of the input array `nums`. We traverse the array twice, and perform constant-time operations in each iteration.

The space complexity of the solution is O(n), where n is the length of the input array `nums`. We use an additional array of size `n` to store the result.