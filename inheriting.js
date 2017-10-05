'user strict';

var EventEmmiter = require('events');
var util = require('util');

class Greetr extends EventEmmiter{
    constructor(){
        super();
        this.greeting = "Hello world";
    }
    greet(data){
        console.log(this.greeting + ": " + data);
        this.emit('greet',data);
    }
}

var greeter1  = new Greetr();
greeter1.on('greet',function(data){
    console.log("Someone Greeting! :" + data);
});

greeter1.greet("TONY");
