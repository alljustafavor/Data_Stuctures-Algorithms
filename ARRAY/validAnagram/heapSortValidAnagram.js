
//  Sort - HeapSort Space O(1) | QuickSort Space O(log(N))
//  Time O(N * logN) | Space O(N)
// https://leetcode.com/problems/valid-anagram/
//  @param {string} s
//  @param {string} t
//  @return {boolean}

const isAnagram = (s, t) => {
    const isEqual = s.length === t.length;
    if (!isEqual) return false;

    return reorder(s) === reorder(t);
}

const reorder = (str) => {
    str.split('')
        .sort((a, b) => a.localeCompare(b))
        .join('')
}


console.log(isAnagram('elbow', 'below')); // output: true
console.log(isAnagram('players', 'parsley')); // output: true
console.log(isAnagram('health', 'vanilla')) // output: false