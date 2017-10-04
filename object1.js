var person = {
    firstname : "Ivan",
    lastname  : "Prokopenko",
    greet: function () {
        console.log("Hello "+this.firstname +" " +this.lastname)
    }
}

person.greet();