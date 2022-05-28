// Freudian translator

// In this kata, the function will take a string as its argument, 
// and return a string with every word replaced by the explanation to everything, 
// according to Freud. Note that an empty string, or no arguments, should return an empty string.

function toFreud(string) {

    //if empty string return empty string
    if (string === "") {
        return ""
    }

    //split() the given string to create an array 
    // use map to loop over elements and assign them to our new value "sex"
    // join the tring back and voila! 
    let result = string.split(" ").map(e => e = "sex").join(" ")
    return result;
}