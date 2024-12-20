let employees = [

    {

    id:101,
    firstname:"Leo",
    lastname:"Messi",
    age:28,
    },

    {

        id:102,
        firstname:"Leo",
        lastname:"Pan",
        age:38,
        },

    {

            id:103,
            firstname:"Manu",
            lastname:"Pal",
            age:48,
         },

];

for(let i=0;i<employees.length;i++){

    console.log(employees[i].firstname);
}

let j=0;
while(j<employees.length){

    console.log(employees[j]);
    j++;
}

for (let employee of employees){

    console.log(employee.lastname);

}

employees.forEach(function(emp){

    console.log(emp.firstname);
})

const names = employees.map(function(emp){

    return emp.firstname;
});
console.log(names);