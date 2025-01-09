const accountId = 1234
let accountEmail = "man@google.com"
var accountPassword="12345"
accountCity = "jaipur"
let accountState;

//accountId = 2 --- /Not Allowed

/*

Prefer not to use var because of block scope and functional scope

*/



accountEmail = "mayor@google.com"
accountPassword="1234567"
accountCity = "Mumbai"

console.log(accountId);
console.table([accountId , accountEmail , accountPassword , accountCity , accountState])

