var greet  = require('./modules');

//https://nodejs.org/dist/latest-v8.x/docs/api/util.html 
var util = require('util');



var name = 'Ivan';
var greeting = util.format('Hello ,%s ',name);
util.log(greeting);

greet.english();
greet.spanish();

