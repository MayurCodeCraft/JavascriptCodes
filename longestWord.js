function longestWord(sentence){

    const words = sentence.split(" ");
    let longestword="";

    for(let word of words){

         if(word.length > longestword.length){

            longestword=word;
         }
         
    }

    return longestword;
}

console.log(longestWord("This is the syntax for longest word"));