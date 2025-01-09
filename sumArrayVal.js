
function sumArray(){

const arr = [1,2,3,45,6];

const sum = arr.reduce((a,c)=>{     //Accumulator and current value
 
     return a+c;

})

console.log("Addtion is " + sum)

}

sumArray();