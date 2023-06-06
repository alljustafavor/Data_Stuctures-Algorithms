--------
tags: [DSA]
--------

# Data Stuctures and Algorithms

## Arrays 

# containsDuplicate()

### Brute Force - Linear Search ./ARRAY/BFcontainsDuplicate.js

<ol>
<li>We declare a variable called right and initialize it to 0 because we need to keep track of the current index of the rightmost element in the array. We start at 0 because we know that the first element in the array is not a duplicate of itself.</li>
<li>We create a loop that iterates from 0 to the length of the array because we need to compare each element in the array to all of the elements that come after it.</li>
<li>We declare a variable called left and initialize it to 0 because we need to keep track of the current index of the leftmost element in the array. We start at 0 because we know that the first element in the array is not a duplicate of itself.</li>
<li>We create a nested loop that iterates from 0 to right because we need to compare the current element to all of the elements that come before it.
We compare the values of the left and right variables because if they are equal, then the element at the left index is a duplicate of the element at the right index.</li>
<li>If a duplicate is found, we return true because this indicates that the array contains at least one duplicate element.</li>
<li>After the outer loop has finished iterating, we return false because this indicates that no duplicates were found in the array.</li>
</ol>

### Sort - HeapSort Space O(1) | QuickSort Space O(log(N)) ./ARRAY/hashSetContainsDuplicate.js

<ol>
<li>We sort the array because this will allow us to easily compare each element to the elements that come after it.</li>
<li>We create a function called hasDuplicates because this will allow us to focus on the task of checking for duplicates in the sorted array.</li>
<li>We create a loop that iterates from 0 to the length of the array minus 1 because we need to compare each element in the array to the element that comes after it.</li>
<li>We compare the values of the current element and the next element because if they are equal, then the element at the current index is a duplicate of the element at the next index.</li>
<li>If a duplicate is found, we return true because this indicates that the sorted array contains at least one duplicate element.</li>
<li>After the loop has finished iterating, we return false because this indicates that no duplicates were found in the sorted array.</li>
</ol>

### Hash Set
<ol>
<li>Create a new Set object and pass the array nums as an argument. This will create a set that contains the unique elements of the array.</li>
<li>Get the size of the Set object. This will tell us how many unique elements are in the array.</li>
<li>Compare the size of the Set object to the length of the array. If the sizes are not equal, then the array must contain at least one duplicate element.</li>
<li>Return the opposite of the comparison result. This will return true if the array contains at least one duplicate element, and false otherwise.</li>
</ol>

### Hash Set - Early Exit
<ol>
<li>Create a new Set object and pass the array nums as an argument. This will create a set that contains the unique elements of the array.</li>
<li>Iterate over the array nums</li>
<li>Check if the current element is in the Set object. If it is, then return true</li>
<li>Add the current element to the Set object</li>
<li>Continue iterating until the end of the array.</li>
<li>Return false if no duplicates were found.</li>
</ol>
