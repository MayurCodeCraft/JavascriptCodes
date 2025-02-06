function largestNum(arr){

    let largest = arr[0];

    for(let i=1;i<arr.length;i++){

        if(arr[i]>largest){

            largest = arr[i];
        }
    }

    return largest;

}

console.log(largestNum([2,4,6,9,3]));