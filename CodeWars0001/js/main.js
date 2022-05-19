// What is between?
// Complete the function that takes two integers 
// (a, b, where a < b) and return an array of all integers between the input parameters, 
// including them.

function between(a, b) {
    // initiate empty array.
    let arr = [];

    for (let i = a; i <= b; i++) {

    // use for loop to push values into the arr variable between provided arguments.
    arr.push(i);
  }
    // return newly created array. 
  
  return arr; 
}

// console.log(between(2,8))
// function will console -> [2, 3, 4, 5, 6, 7, 8]