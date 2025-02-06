function findHighestInteger(arr){

    return arr.length === 0 ? "Array is empty" : Math.max(...arr)
}

const array = [5, 12, 8, 21, 3, 67, 45 , 12];
console.log("Highest number is : "+ findHighestInteger(array))