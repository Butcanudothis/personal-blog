---
title: 'Contains Duplicate'
date: '2023-04-23'
---

## Approach

The problem is to determine if an array contains any duplicate elements. One simple approach is to use a hash table to store the elements that we have already seen.

## Solution

We can iterate through the array and for each element, we can check if it exists in the hash table. If it does, we can return true indicating that there are duplicates in the array. If it doesn't, we add it to the hash table. If we reach the end of the loop without finding any duplicates, we can return false.

```java
1. public boolean containsDuplicate(int[] nums) {
2.     HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
3.     for (int i = 0; i < nums.length; i++) {
4.         if (map.containsKey(nums[i])) {
5.             return true;
6.         } else {
7.             map.put(nums[i], 1);
8.         }
9.     }
10.    return false;
11. }

```

## Line by line solution

1. This line defines the signature of the method `containsDuplicate`, which takes an integer array `nums` as input and returns a boolean value indicating whether or not the array contains any duplicates.
2. This line creates a new `HashMap` object called `map` with key and value type of `Integer`. This will be used to store the elements of the array as keys and their count as values.
3. This line starts a `for` loop to iterate over each element in the `nums` array.
4. This line checks if the current element `nums[i]` is already present as a key in the `map` HashMap.
5. If the element is present in the HashMap, it means we have found a duplicate element, so we immediately return `true`.
6. If the element is not present in the HashMap, we move on to the `else` block.
7. This line adds the element `nums[i]` as a key to the `map` HashMap and sets its corresponding value to `1`.
8. The `for` loop continues to the next element in the `nums` array.
9. Once the loop has iterated over all elements in the array, it means there are no duplicates present, so we return `false`.
10. This line signifies the end of the `containsDuplicate` method.

Overall, this solution uses a `HashMap` to keep track of the count of each element in the `nums` array. It iterates over each element in the array and checks if the element already exists in the `HashMap`. If the element is found, the method immediately returns `true` as it has found a duplicate. If the element is not found, it is added to the `HashMap` and the iteration continues. If the loop completes without finding a duplicate, the method returns `false`.

The time complexity of this solution is O(n), where n is the length of the input array `nums`, because it iterates over each element of the array once. The space complexity is also O(n), because in the worst case scenario where all elements are unique, the entire array will be stored in the `HashMap`.

## Time and Space Complexity

The time complexity of the solution is O(n) because we iterate through the array only once. The space complexity is also O(n) because in the worst-case scenario, we will have to store all the elements of the array in the hash table.