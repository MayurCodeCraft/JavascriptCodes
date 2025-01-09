function addValue(){

    const arr = ['jan','feb','apr'];

    arr.splice(2,0,'mar');   //(Position,0-adding,1-removal,'value to be added')
    console.log(arr);
}

addValue()