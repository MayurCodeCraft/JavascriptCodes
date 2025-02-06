let promise1 = new Promise((resolve,reject)=>{

    let success = false;
    if(success){

        resolve("Promise Fulfilled")
    }else{

        reject("Promise rejected")
    }
});

promise1.then((message)=>{

    console.log("then is " + message);
}).catch((error)=>{

    console.log("Error is "  + error);
})