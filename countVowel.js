// program to count the number of vowels in a string

/*function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
//const string = prompt('Enter a string: ');
const string = console.log('Enter a string: ');

const result = countVowel(string);

console.log(result);*/


function vowelCount(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
  }
  
  console.log(vowelCount("abc")); // 1
  console.log(vowelCount("hello")); // 2