const numbers = [1,2,3,3,4,5,4,4,7,6,9,7,8];

const names = ["Tom","Naveen","Lisa","Tom","Nav","Nav","Lisa","Robby","Tom"];

const uniqueNumbers = [... new Set(numbers)];
console.log(uniqueNumbers);

const uniquesNames = [... new Set(names)];
console.log(uniquesNames);