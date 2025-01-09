function outerFunction(){

    let name = "Bamb"

    function innerFunction(){

        console.log(name);
    }

   // innerFunction()
   return innerFunction;
}

let inner = outerFunction();

inner();

//outerFunction()