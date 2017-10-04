var person = {
    firstname : "Ivan",
    lastname  : "Prokopenko",
    greet: function () {
        console.log("Hello "+this.firstname +" " +this.lastname)
    }
}

person.greet();

console.log(person['firstname']);
console.log(person['lastname']);