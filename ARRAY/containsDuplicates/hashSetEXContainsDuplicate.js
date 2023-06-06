

// Hash Set - Early Exit
// Time O(N) | Space O(N)
// https://leetcode.com/problems/contains-duplicate/
// @param {number[]} nums
// @return {boolean}

const containsDuplicate = (nums, numSet = new Set()) => {
    for (num of nums) { // Time O(N)
        if (numSet.has(num)) return true;

        numSet.add(num); // Space O(N)
    }

    return false;
}

console.log(containsDuplicate([1, 2, 3, 4, 5])); // output: false
console.log(containsDuplicate([1, 1, 2, 3, 4, 5])); // output: true