let employeee = {

    id:101,
    firstname:"Leo",
    lastname:"Messi",
    age:28,
    doj:"12/12/2024",
    address: {
     
         city:"Mumbai",
         country:"India"

    },
    skills:["Javascript","CSS","HTML"],
    fullName: function(){

        return `${this.firstname} ${this.lastname}`
    }
}
console.log(typeof employeee)
console.log(employeee)

//Access Object Properties

console.log(employeee.id);
console.log(employeee.address.city);
console.log(employeee.skills[1]);
console.log(employeee.fullName())

//Destructuring

const { firstname , age } = employeee;
console.log(firstname);