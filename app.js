var greet  = require('./modules');

//https://nodejs.org/dist/latest-v8.x/docs/api/util.html 
var util = require('util');



var name = 'Ivan';
var greeting = util.format('Hello ,%s ',name);
util.log(greeting);

greet.english();
greet.spanish();


var Emmiter = require('./emmiter.js');
var emtr = new Emmiter();
emtr.on('greet',function(){
    console.log('Somewhere someone say Hello');
});
emtr.on('greet',function(){
    console.log('A greeting occured');
});

emtr.emit('greet');

var EmmiterNode = require('events');
var eventConfig = require('./config.js').events;

var emtrNode = new EmmiterNode();
emtrNode.on(eventConfig.GREET,function(){
    console.log('Somewhere someone say Hello');
});
emtrNode.on(eventConfig.GREET,function(){
    console.log('A greeting occured');
});

emtrNode.emit(eventConfig.GREET);