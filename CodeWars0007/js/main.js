// You Can't Code Under Pressure #1

// Code as fast as you can! You need to double the integer and return it.

// Fun and easey one.... 

// solution 1

function doubleInteger(i) {
    i += i
    return i;
}

// solution 2

function doubleInteger(i) {
    return i += i
}

// solution 3

function doubleInteger(i) {
    return i * 2
}