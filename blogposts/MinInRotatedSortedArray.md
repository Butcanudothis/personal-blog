---
title: Find Minimum in Rotated Sorted Array
date: '2023-04-29'
---

[https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/)

## Earlier Solution using Linear Search

```java
class Solution {
    public int findMin(int[]nums) {
for(int i = 0; i < nums.length-1; i++){

  if (nums[i+1] < nums[i]){
        return nums[i+1];
    }
}
return nums[0];
    }
}
```

The solution above uses a linear search approach to find the minimum element in the given rotated array. It iterates through the array and returns the first element that is less than its previous element. This approach has a time complexity of O(n) in the worst case, where n is the length of the array.

On the other hand, the binary search approach to finding the minimum element in a rotated subarray has a worst-case time complexity of O(log n), where n is the length of the array. This approach involves splitting the array into two halves and comparing the middle element with the first and last element to determine which half to search in. This process is repeated until the minimum element is found.

Therefore, in the worst case, the binary search approach is better than the linear search approach in terms of time complexity. However, the linear search approach has a simpler implementation and may be faster for smaller arrays.

## Approach

The given array is sorted, but rotated, so a direct search will not be efficient as it will have O(n) time complexity. Hence, we need to use a binary search approach to reduce the time complexity to O(log n). We will keep track of two pointers, left and right, that will point to the beginning and end of the array respectively. Then, we will keep dividing the array into two halves until we find the minimum element.

## Solution

We will use a modified binary search approach to find the minimum element in a rotated sorted array. We will keep track of two pointers, `l` and `r`, that will point to the beginning and end of the array respectively. We will initialize `l` to 0 and `r` to `nums.length - 1`. Then, we will calculate the middle element of the array, `m`, using the formula `m = (l + r) / 2`. We will compare the middle element with the last element of the array, `nums[r]`. If the middle element is less than the last element, it means the minimum element lies in the left half of the array, so we update `r` to `m`. If the middle element is greater than or equal to the last element, it means the minimum element lies in the right half of the array, so we update `l` to `m + 1`. We keep dividing the array into halves until `l` and `r` become equal, which means we have found the minimum element.

```java
class Solution {
  public int findMin(int[] nums) {
    int l = 0;
    int r = nums.length - 1;

    while (l < r) {
      final int m = (l + r) / 2;
      if (nums[m] < nums[r])
        r = m;
      else
        l = m + 1;
    }

    return nums[l];
  }
}

```

## Line by line explanation

1. `int l = 0; int r = nums.length - 1;` - Initialize the left and right pointers to the beginning and end of the array respectively.
2. `while (l < r)` - Keep dividing the array into two halves until the left and right pointers become equal.
3. `final int m = (l + r) / 2;` - Calculate the middle element of the array.
4. `if (nums[m] < nums[r]) r = m;` - If the middle element is less than the last element of the array, it means the minimum element lies in the left half of the array, so we update `r` to `m`.
5. `else l = m + 1;` - If the middle element is greater than or equal to the last element of the array, it means the minimum element lies in the right half of the array, so we update `l` to `m + 1`.
6. `return nums[l];` - Return the minimum element, which is `nums[l]`.

## Time and Space complexity

The time complexity of the algorithm is O(log n) as we are using a binary search approach. The space complexity of the algorithm is O(1) as we are not using any extra space apart from the variables used for storing the pointers and the middle element.
