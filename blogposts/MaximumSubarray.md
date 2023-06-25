---
title: 'Maximum Subarray'
date: '2023-04-27'
---

[https://leetcode.com/problems/maximum-subarray/](https://leetcode.com/problems/maximum-subarray/)

## Approach

The problem of finding the maximum subarray can be approached using the greedy algorithm. The greedy algorithm follows the approach of making the locally optimal choice at each step in the hope of finding a global optimum.

Kadane's Algorithm is a well-known algorithm for solving the maximum subarray problem. It uses the greedy approach to find the maximum subarray sum in a given array.

## Solution

The solution to the maximum subarray problem is implemented using Kadane's Algorithm in the following code:

```
class Solution {
    public int maxSubArray(int[] nums) {
        int max = nums[0];
        int sum = 0;
        for(int i = 0; i < nums.length; i++){
            sum += nums[i];
            if(sum > max){
                max = sum;
            }
            if(sum < 0){
                sum = 0;
            }
        }
        return max;
    }
}

```

## Line by line explanation

Let's go through the code step by step:

1. The `maxSubArray` function takes an integer array `nums` as input.
2. Two integer variables `max` and `sum` are declared, where `max` is initialized as the first element of the array `nums`.
3. A loop is run from the first element of the array `nums` to its last element.
4. At each iteration of the loop, the value of `sum` is updated as the sum of the current element and the previous sum.
5. If the value of `sum` becomes greater than `max`, then `max` is updated with the value of `sum`.
6. If the value of `sum` becomes negative, then it is reset to 0. This is done because a negative sum cannot contribute to the maximum subarray sum.
7. After the loop is completed, the final value of `max` is returned as the maximum subarray sum.

## Time and Space complexity

The time complexity of the Kadane's Algorithm is O(n), where n is the length of the input array `nums`. This is because the algorithm involves a single pass over the array `nums`.

The space complexity of the algorithm is O(1), as we are using only two constant space variables, `max` and `sum`.
