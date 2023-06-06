
//  Hash Set 
//  Time O(N) | Space O(N)
//  @param {number[]} nums
//  @return {boolean}

const containsDuplicate = nums => {
    const numSet = new Set(nums);
    const isEqual = numSet.size === nums.length

    return !isEqual;
}

console.log(containsDuplicate([1, 2, 3, 4, 5])); // output: false
console.log(containsDuplicate([1, 1, 2, 3, 4, 5])); // output: true