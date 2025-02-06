//Number which is divisible only itself and 1 ;

function primeNum(num){

    for(let i = 2;i<=num/2;i++){

        if(num%i===0){
            return false;
        }
    }

    return true;

}

console.log(primeNum(7));