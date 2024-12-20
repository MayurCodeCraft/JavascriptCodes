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

];

console.log(employees);
console.log(employees[0]);

const employeesJSON = JSON.stringify(employees)   //While sending the data to the backend , we need to send a JSON format
console.log(employeesJSON);

const employeeArray = JSON.parse(employeesJSON)  //On receiveing the response,convert the data back to array of objects
console.log(employeeArray);