'user strict';

class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    grett(){
        console.log('Hello ' + this.firstname + " " + this.lastname);
    }
}

var John = new Person("Ivan",'Prokopenko');
John.grett();
var Jane = new Person("Jane", 'Prokopenko');
Jane.grett();