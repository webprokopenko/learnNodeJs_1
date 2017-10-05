var util = require('util');
function Person(){
    this.firstname = "John",
    this.lastname = 'Doe'
};

Person.prototype.greet = function(){
    console.log(`Congratulation ${this.firstname} ${this.lastname}`);
}

function Policeman(){
    this.badgenumber = 123;
    Person.call(this);
}

util.inherits(Policeman,Person);

var Officer = new Policeman();
Officer.greet();