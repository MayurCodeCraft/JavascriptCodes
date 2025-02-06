function findSmallestWord(str) {
    // Split the string into an array of words
    let words = str.split(' ');

    // Initialize the smallest word as the first word
    let smallestWord = words[0];

    // Loop through the words and find the smallest one
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < smallestWord.length) {
            smallestWord = words[i];
        }
    }

    return smallestWord;
}

// Example usage:
let inputString = "I love programming in JavaScript";
let smallest = findSmallestWord(inputString);
console.log("The smallest word is:", smallest);