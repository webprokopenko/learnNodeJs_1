//functions statement
function greet() {
    console.log('Hi');
}

greet();

//functions are first-class
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

//functions expression
var greetMee = function () {
    console.log('Hi Ivan');
}
greetMee();

//first-class
logGreeting(greetMee);

//user functions expression on the fly
logGreeting(function () {
    console.log("Hello Ivan from function expression on a fly");
})