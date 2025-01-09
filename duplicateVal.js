//Finding duplicate values from arrray

function duplicateValues(){

    const arr = [1,2,2,3,4,4,4,5,7,7,8,8,9];
    const result = arr.filter((val,index,self)=>{

        return self.indexOf(val) !== index;
    })

    console.log("Duplicate values are " + result);

}

duplicateValues()