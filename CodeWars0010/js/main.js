// Count of positives / sum of negatives

// Given an array of integers.

// Return an array, where the first element is the count of positives
// numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15],
// you should return [10, -65].


function countPositivesSumNegatives(input) {
    //if array is empty or 0  
    if (input < 1) {

        //returns empty array
        return []
    }

    let count = 0 //of poditive numbers
    let sum = 0 // of negative numbers
    let newArr = [] // new array to store final element values. 

    for (let i = 0; i < input.length; i++) {
        //find postitive number and count it
        if (input[i] > 0) {
            count++
            //if not poritive it is negative and sum it
        } else {
            sum += input[i]
        }

    }
    //push new values to the array
    newArr.push(count, sum)
    //return final array 
    return newArr

    //above can be done as below, and it is nicer.... 

    // return [count, sum ]
}


countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
