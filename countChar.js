//Count the characters of the string

function countChar(str){

    const countChar={};

    for(let char of str){

        if (countChar[char]){

            countChar[char]+=1;
        }
        else{

            countChar[char]=1;
        }
    }
    return countChar;
}

let result= countChar("This is an actual Test");
console.log(result);