function greet(callback){
    console.log("Functions greet!!");
    var data = {
        name: 'John Doe'
    }
    callback(data);
}

greet(function(datas){
    console.log('Function callback');
    console.log(datas);
});
greet(function(datas){
    console.log('Function callback new');
    console.log(datas);
});

