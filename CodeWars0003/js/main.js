// Simple string characters 7 Kyu

// In this Kata, you will be given a string and your task will be to return a 
// list of ints detailing the count of uppercase letters, lowercase, 
// numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.

// used RegExp, need to circle back and do a solution with out RegExp
// took some time to figure out and definitley need to revisit and find more katas like this

function solve(s) {
    let lower = s.match(/[a-z]/g).length
    let upper = s.match(/[A-Z]/g).length
    let number = s.match(/[0-9]/g).length
    let other = s.match(/\W/g).length

    return [upper, lower, number, other]
}

console.log(solve("*'&ABCDabcde12345"))