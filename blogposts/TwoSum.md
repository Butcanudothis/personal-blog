---
title: 'Two Sum'
date: '2023-04-20'
---

[https://leetcode.com/problems/two-sum/description/]

## Earlier Solution in Java (inefficient)

```java
public int[] twoSum(int[] nums, int target) {
    int [] arr = new int[]{};
     for (int i = 0; i < nums.length; i++) {
            for (int j = i+1; j <nums.length; j++)
            {
                if (nums[i]+nums[j] == target)
                {
                    arr = new int[]{i,j};
                    return arr;
                }
            }

        }
    return arr;
    }
}
```

There is no problem with this solution in terms of correctness, but it may not be the most efficient solution for very large input sizes. Here are some potential issues:

- Time complexity: The solution uses nested loops to check all pairs of numbers in the array, resulting in a time complexity of O(n^2), where n is the length of the input array. This may become a problem for very large input sizes, as the algorithm may take a long time to run.
- Space complexity: The solution uses an array to store the result, which is initially set to an empty array. If no pair of numbers is found that adds up to the target, the empty array is returned as the result. This means that the space complexity of the solution is O(1), which is constant regardless of the input size. However, it also means that the solution does not provide any information about whether or not a valid pair exists in the input array.

Overall, this solution is a valid and correct approach to solving the two sum problem, but it may not be the most efficient or informative solution for very large input sizes.

## Approach

The two sum problem on LeetCode requires us to find two indices in an array that add up to a target value. We can solve this problem using a brute force approach, by checking all possible pairs of indices in the array. However, this would result in a time complexity of O(n^2), which is not efficient for large input sizes.

Instead, we can use a hash table to keep track of the complement of each number we encounter. As we iterate through the array, we check if the complement of the current number exists in the hash table. If it does, we have found a pair of indices that add up to the target value. If not, we add the current number to the hash table and continue iterating.

## Solution

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        throw new IllegalArgumentException("No two sum solution");
    }
}

```

## Line by Line Explanation

- We create a new HashMap to store the complement of each number we encounter.
- We iterate through the array using a for loop, checking the complement of each number in the array.
- If the complement exists in the map, we have found a pair of indices that add up to the target value. We return an array with the indices of the complement and the current number.
- If the complement does not exist in the map, we add the current number to the map with its index as the value.
- If we reach the end of the array without finding a solution, we throw an IllegalArgumentException.

## Time and Space Complexity

The time complexity of this solution is O(n), where n is the length of the input array. This is because we iterate through the array once and perform constant time operations (i.e., hash table lookups and insertions) for each element in the array.

The space complexity of this solution is O(n) as well, since we may need to store all n elements of the input array in the hash table.