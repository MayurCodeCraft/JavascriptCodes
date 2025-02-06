// String
let name = "John Doe";
console.log("String: " + name);

// Number
let age = 30;
console.log("Number: " + age);

// Boolean
let isStudent = true;
console.log("Boolean: " + isStudent);

// Undefined
let job;
console.log("Undefined: " + job);  // job is not assigned yet, so it will output 'undefined'

// Null
let address = null;
console.log("Null: " + address);
console.log("The type of address is "+typeof(address))

// Symbol
let uniqueID = Symbol("id");
//console.log("Symbol: " + uniqueID);

// BigInt (for very large numbers)
let largeNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt: " + largeNumber);

console.log(typeof undefined); // undefined
console.log(typeof null); // object

console.log(typeof(Nan));

let a=10;
let b=20;

console.log(`Sum of ${a} and ${b} is ${a+b}`);
