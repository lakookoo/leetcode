// Find a peak
//
// Given a non-empty array of integers arr, create a function 
// that returns the index of a peak element. 
// We consider an element as peak if it's greater than or equal 
// to its neighbors, the next and previous element 
// (assume that arr[-1] and arr[n] are equal to -∞). 
// And if there are multiple peaks in arr, just return 
// the index of one of them.

// Example 1:
// Input: arr = [4, 5, 8, 3]
// Output: 2
// Explanation: arr[2] is a peak element because it's greater than 
// or equal to arr[1], and greater than or equal to arr[3]

// Example 2:
// Input: arr = [1, 3, 4, 7, 8]
// Output: 4
// Explanation: arr[4] is a peak element because it's greater than 
// or equal to arr[3], which is it's only neighbor

// Example 3:
// Input: arr = [1, 5, 2, 6, 6, 3]
// Output: 3
// Explanation: arr[3] is a peak element because it's greater than 
// or equal to arr[2] and greater than or equal to arr[4] 
// (other valid outputs would be 1 and 4, because arr[1] and arr[4] 
// are also peak elements)

//brute force solution
function findPeak(arr){
    for(let i = 0; i < arr.length; i++){
        if((i == 0 || arr[i] >= arr[i-1]) && (i == arr.length - 1 || arr[i] >= arr[i+1]))
            return i;
    }
}

// divide and conquer iteratively
function findPeak(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid] < arr[mid+1]) left = mid + 1;
        else right = mid;
    }
    return left
}

// divide and conquer recursively

function findPeak(arr, left = 0, right = arr.length - 1){
    if(left >= right) return left;
    let mid = Math.floor((left + right)/2);
    if (arr[mid] < arr[mid+1])
        return findPeak(arr, mid+1, right);
    else
        return findPeak(arr, left, mid);
}