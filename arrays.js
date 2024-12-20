let frameworks = ["Angular","React","Javascript"];
let databases = new Array("DB2","SQL","MONGODB");

console.log(frameworks[2])
databases[0]="ORACLE";
console.log(databases);

console.log(frameworks.length);
console.log(frameworks.sort());
console.log(databases.pop())   //Removes the last element
databases.shift();
console.log(databases);
databases.push("CASANDRA");  //Add an element at the last
console.log(databases);
databases.unshift("ORACLE");  //Add an element at the 9th index
console.log(databases);

console.log(typeof frameworks);
console.log(Array.isArray(frameworks));
console.log(frameworks instanceof Array);

