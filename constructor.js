function Person(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}


var objPerson = new Person("Ivan","Prokopenko");
console.log(objPerson.lastname);
objPerson.greet();

var objPerson1 = new Person("Irina","Elina");
objPerson1.greet();

console.log(objPerson.__proto__);
console.log(objPerson1.__proto__);

console.log(objPerson.__proto__ === objPerson1.__proto__);