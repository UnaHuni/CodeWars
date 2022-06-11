// Square(n) Sum

// Complete the square sum function so that it squares each number 
// passed into it and then sums the results together.

function squareSum(numbers) {
    return numbers.reduce((acc, e) => acc + (e ** 2), 0)
}

console.log(squareSum([1, 2, 2]))