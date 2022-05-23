// Sum of differences in array

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ).

function sumOfDifferences(arr) {

    // eliminate empty arrays and arrays that have less than 2 elements
    if (arr.length < 2) {
        return 0
    }

    // first sort given array, than reverse the order
    arr.sort((a, b) => a - b).reverse()
    // container for new element value
    let difference = []

    //iterate through the array and capture difference between current and next element. 
    for (let i = 0; i < arr.length; i++) {

        // push(add) value into our empty array  
        difference.push(arr[i] - arr[i + 1])

    }
    // remove last element as it will always be NaN -> element - empty array
    difference.pop()

    // find a sum using reduce method
    return difference.reduce((a, b) => a + b)
}