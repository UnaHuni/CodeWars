// Enumerable Magic #20 - Cascading Subsets

// Create a method each_cons that accepts a list and a number n, and returns cascading subsets 
// of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

// As you can see, the lists are cascading; ie, they overlap, but never out of order.


function eachCons(array, n) {
    let arr = [];
    // loop over elements
    for (let i = 0; i < array.length; i++) {
        //slice array at current index(position) and end the new array at index + given number
        // slice does not include last element.
        // if index is 0, and n = 2; our end parameter will be 2. and we will slice our array at index 1
        // because index 2 is not included. 
        arr.push(array.slice(i, i + n));
    }
    // we want to remove all arrays wich length is less than our given number
    return arr.filter(e => e.length === n);
}

// one line code...of the same thing.

function eachCons(array, n) {
    return array.map((element, index) => array.slice(index, index + n)).filter(element => element.length === n)
}

console.log(eachCons([1, 2, 3, 4], 2))
