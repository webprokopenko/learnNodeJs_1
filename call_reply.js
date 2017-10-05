var obj = {
    name: 'John Doe',
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}
obj.greet();

obj.greet.call({name : "Jane Doe"}); //, serparated variables;
obj.greet.apply({name : "Jane Doe"}); // arrays variables
