
// Sort - HeapSort Space O(1) | QuickSort Space O(log(N))
// Time O(N * log(N)) | Space O(1)
// https://leetcode.com/problems/contains-duplicate/
// @param {number[]} nums
// @return {boolean}

const containsDuplicate = nums => {
    nums.sort((a, b) => a - b); //Time O(N * log(N)) | Space O(1 || log(N))

    return hasDuplicates(nums);
}

const hasDuplicates = nums => {
    for (let curr = 0; curr < (nums.length - 1); curr++) {//Time O(N) 
        const next = (curr + 1);

        const isNextDuplicate = nums[curr] === nums[next];
        if (isNextDuplicate) return true;
    }

    return false
}

console.log(containsDuplicate([1, 2, 3, 4, 5])); // output: false
console.log(containsDuplicate([1, 1, 2, 3, 4, 5])); // output: true