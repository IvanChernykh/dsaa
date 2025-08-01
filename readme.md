# Data Structures and Algorithms

## Search

### Linear Search

Complexity - O(n).

Just loop through array until needed element is found.

### Binary Search

Complexity - O(log n)

Only for sorted arrays.
Take middle element. Compare to needed item. Take the half of array where the item could be. Repeat until needed item is found.

### Jump Search

Complexity - O(√n)

Only for sorted arrays.
Choose step size (√n). Jump ahead by step size until the target is passed. Step back one block. Move forward linearly until the item is found.

## Sort

### Bubble Sort

Complexity - O(n²)

Loop through the array. In each iteration, compare adjacent items and swap them if they are in the wrong order. With each outer loop iteration, the largest remaining item "bubbles up" to its correct position at the end. So the inner loop can run one item less each time.

### Selection Sort

Complexity = O(n²)

Loop through the array. For each position, find the smallest item in the remaining unsorted part and swap it with the current position. Repeat until the array is sorted.

### Insertion Sort

Complexity – O(n²)

Loop through the array from the second element, as the first is considered sorted.
Take the current element and compare it to the elements before it. Shift all larger elements one position to the right. Insert the current element into the correct position.

### Quick Sort

Complexity - O(n log n) on average, O(n²) worst case

Pick a pivot element. Move all smaller items to the left of the pivot and all greater to the right (partition step). Then recursively repeat the process for left and right parts.

### Merge Sort

Complexity - O(n log n)

Divide the array into two halves recursively until each subarray has one item. Then merge sorted subarrays back together by comparing elements from the left and right sides and building a new sorted array.
