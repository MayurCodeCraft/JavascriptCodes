function maxNum(arr){


const maxFunction=(arr)=>{

    return arr.reduce(function(pre,cur){

        return pre>cur?pre:cur

    })
  }

  return maxFunction(arr);
} 

 const arrNum = [1,25,67,56,85,78];
 console.log(maxNum(arrNum));

