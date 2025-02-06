function reverseString(str) {
    let words = str.split(' '); // Split the string by spaces into words
    let reversedWords = words.map(word => word.split('').reverse().join('')); // Reverse each word
    return reversedWords.join(' '); // Join the reversed words back with spaces
}

let inputStr = "Today is Monday";
let reversedStr = reverseString(inputStr);
console.log(reversedStr);  // Output: "yadoT si yadnoM"

/*

------------------------EXPLAINATION-----------------------
The split(' ') method splits the input string into an array of words, using the space (' ') character as the delimiter. 
So, in the case of "Today is Monday", it will turn into an array like this: ["Today", "is", "Monday"].

>Reversing Each Word:

let reversedWords = words.map(word => word.split('').reverse().join(''));
The map() method is used to iterate over each word in the words array.
For each word, we perform the following operations:
word.split(''): This splits the word into an array of individual characters. For example, "Today" becomes ["T", "o", "d", "a", "y"].
.reverse(): This reverses the array of characters. "Today" becomes ["y", "a", "d", "o", "T"].
.join(''): This joins the reversed array back into a string. The reversed word is "yadoT".
So, after applying this operation to all words, the reversedWords array will contain the reversed words: ["yadoT", "si", "yadnoM"].

>Joining the Words Back Together:

return reversedWords.join(' '); // Join the reversed words back with spaces
After reversing each word, we use join(' ') to join the words back into a single string with spaces between them. The result is "yadoT si yadnoM".

*/