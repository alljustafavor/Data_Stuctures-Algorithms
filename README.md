
# Data Stuctures and Algorithms

## Arrays 

# containsDuplicate()

### Brute Force - Linear Search ./ARRAY/BFcontainsDuplicate.js

```javascript
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
```


1. We declare a variable called right and initialize it to 0 because we need to keep track of the current index of the rightmost element in the array. We start at 0 because we know that the first element in the array is not a duplicate of itself.
1. We create a loop that iterates from 0 to the length of the array because we need to compare each element in the array to all of the elements that come after it.
3. We declare a variable called left and initialize it to 0 because we need to keep track of the current index of the leftmost element in the array. We start at 0 because we know that the first element in the array is not a duplicate of itself.
4. We create a nested loop that iterates from 0 to right because we need to compare the current element to all of the elements that come before it.
We compare the values of the left and right variables because if they are equal, then the element at the left index is a duplicate of the element at the right index.
5.If a duplicate is found, we return true because this indicates that the array contains at least one duplicate element.
6. After the outer loop has finished iterating, we return false because this indicates that no duplicates were found in the array.


### Sort - HeapSort Space O(1) | QuickSort Space O(log(N)) ./ARRAY/hashSetContainsDuplicate.js

```javascript
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
```

<ol>
<li>We sort the array because this will allow us to easily compare each element to the elements that come after it.</li>
<li>We create a function called hasDuplicates because this will allow us to focus on the task of checking for duplicates in the sorted array.</li>
<li>We create a loop that iterates from 0 to the length of the array minus 1 because we need to compare each element in the array to the element that comes after it.</li>
<li>We compare the values of the current element and the next element because if they are equal, then the element at the current index is a duplicate of the element at the next index.</li>
<li>If a duplicate is found, we return true because this indicates that the sorted array contains at least one duplicate element.</li>
<li>After the loop has finished iterating, we return false because this indicates that no duplicates were found in the sorted array.</li>
</ol>

### Hash Set

```javascript
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
```

<ol>
<li>Create a new Set object and pass the array nums as an argument. This will create a set that contains the unique elements of the array.</li>
<li>Get the size of the Set object. This will tell us how many unique elements are in the array.</li>
<li>Compare the size of the Set object to the length of the array. If the sizes are not equal, then the array must contain at least one duplicate element.</li>
<li>Return the opposite of the comparison result. This will return true if the array contains at least one duplicate element, and false otherwise.</li>
</ol>

### Hash Set - Early Exit

```javascript
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
```

<ol>
<li>Create a new Set object and pass the array nums as an argument. This will create a set that contains the unique elements of the array.</li>
<li>Iterate over the array nums</li>
<li>Check if the current element is in the Set object. If it is, then return true</li>
<li>Add the current element to the Set object</li>
<li>Continue iterating until the end of the array.</li>
<li>Return false if no duplicates were found.</li>
</ol>

# isAnagram()

### Sort - HeapSort Space O(1) | QuickSort Space O(log(N))

1. The function isAnagram takes two parameters s and t.
   - It first checks if the length of the two strings is equal.
   - If not, it returns false.
   - If the length is equal, it calls the function reorder on both strings and compares the result
2. The function reorder takes one parameter str.
   - It splits the string into an array of characters using the split() method.
   - It then sorts the array in alphabetical order using the sort() method.
   - Finally, it joins the sorted array back into a string using the join() method.

```javascript
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

```

### Hash Map - Frequency Counter Time O(N) | Space O(1)

1. The function isAnagram takes in two strings s and t as input and returns a boolean value indicating whether t is an anagram of s.
2. The function first checks if the lengths of s and t are equal. If they are not equal, it returns false.
3. The function then calls addFrequency to add the frequency of characters in s to the map.
4. It then calls subtractFrequency to subtract the frequency of characters in t from the map.
5. Finally, it calls checkFrequency to check if all the values in the map are 0, indicating that t is an anagram of s.

```javascript
const isAnagram = (s, t, map = new Map()) => {
    const isEqual = s.length === t.length;
    if (!isEqual) return false;

    addFrequency(s, map);
    subtractFrequency(t, map);

    return checkFrequency(map);
};

const addFrequency = (str, map) => {
    for (const char of str) {
        const count = (map.get(char) || 0) + 1;

        map.set(char, count);
    }
};

const subtractFrequency = (str, map) => {
    for (const char of str) {
        if (!map.has(char)) continue;

        const count = map.get(char) - 1;

        map.set(char, count);
    }
};

const checkFrequency = map => {
    for (const [char, count] of map) {
        const isEmpty = count === 0;
        if (!isEmpty) return false;
    }

    return true;
}

console.log(isAnagram('elbow', 'below')); // output: true
console.log(isAnagram('players', 'parsley')); // output: true
console.log(isAnagram('health', 'vanilla')) // output: false
```

