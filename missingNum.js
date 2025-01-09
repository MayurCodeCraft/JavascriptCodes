function findMissingNum(){

    let arr=[1,2,3,5];
    count=10;
    Output=[];

    for (let i=0;i<=count;i++){

        !arr.includes(i)?Output.push(i):"";

    }

    console.log("The missing numbers are " + Output)
}

findMissingNum()