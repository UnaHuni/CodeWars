// I love you, a little , a lot, passionately ... not at all

// Your goal in this kata is to determine which phrase the girls would 
// say for a flower of a given number of petals, where nb_petals > 0.


function howMuchILoveYou(nbPetals) {
    // array holding prhases which we want to iterate over
    // we have total of 6, but need to keep in mind this is an array and 
    // and iterating will start at 0 and end at 5

    const arr = [
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
        "not at all",
    ];
    //using for loop to do this, and making sure we subtract our given number by one to 
    // match our array indexing

    for (let i = 0; i <= nbPetals - 1; i++) {
        // if our given number is equal to our iterator    
        if (i === nbPetals - 1) {

            // we want to % with 6 since we have 6 phrases and get the remainder wich will 
            // be our array position and final phrase.   
            return arr[i % 6];
        }
    }
}

console.log(howMuchILoveYou(8))