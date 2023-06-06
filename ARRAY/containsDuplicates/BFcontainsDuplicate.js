
// Brute 
// Time O(n) | Space O(1)
// https://leetcode.com/problems/contains-duplicate/
// Param {number[]} nums 
// Return {boolean}

const containsDuplicate = nums => {
    for (let right = 0; right < nums.length; right++){
        for(let left = 0; left < right; left++){
            const isDuplicate = nums[left] === nums[right];
            if (isDuplicate) return true
        }
    }

    return false;
}


console.log(containsDuplicate([1, 2, 3, 4, 5])); // output: false
console.log(containsDuplicate([1, 1, 2, 3, 4, 5])); // output: true