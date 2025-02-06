const countoccurence=(str,char)=>{

    let output=str.split(char).length;
    return output;
}

console.log(countoccurence("Javascript","a"))