function secondLargest(){

    const arr = [2,4,8,89,67,75,54,2];


    arr.sort((a,b)=>a-b);
    console.log(arr);
    console.log("Second largest number is " + arr[arr.length-2]);
}

secondLargest()