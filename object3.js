var person = {
    firstname:'',
    lastname:'',
    greet: function(){
        return this.firstname + " " + this.lastname;
    }
}

var john = Object.create(person);
john.firstname = "Ivan";
john.lastname = 'Prokopenko';

var jane = Object.create(person);
jane.firstname = "Jane";
jane.lastname = 'Prokopenko';


console.log(john.greet());
console.log(jane.greet());