var EventEmmiter = require('events');
var util = require('util');

function Greetr(){
    this.greeting = "Hello world";
}

util.inherits(Greetr,EventEmmiter);

Greetr.prototype.greet = function(data){
    console.log(this.greeting + ": " + data);
    this.emit('greet',data);
}

var greeter1  = new Greetr();
greeter1.on('greet',function(data){
    console.log("Someone Greeting! :" + data);
});

greeter1.greet("TONY");
