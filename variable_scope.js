function variableScope(){

    if(true){

        var a=10;
        let b=20;
        const c=30;
        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);

    //ReferenceError: b and c is not defined due to block scope
    console.log(b);
    console.log(c);
}

variableScope()