var express =  require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
var mongoose = require('mongoose');
mongoose.connect('mongodb://test.mongolab.com:47030/adressbook'); //like a simple

var Schema = mongoose.Schema;
var personSchema = {
    firstname : String,
    lastname  : String,
    address   : String
}

var Pseron = mongoose.model('Person',personSchema);

var john = Person({
    firstname: 'John',
    lastname: 'Last',
    address: "55 Main Str",
});
//save user
john.save(function(err){
    if(err) throw err;

    console.log('person saved');
})

var port = process.env.PORT || 3001;

var urlencodedParser = bodyParser.urlencoded({extended:false});

var jsonParser = bodyParser.json();

app.use('/assets',express.static(__dirname + '/public'));

app.set('view engine','ejs');


app.use('/',function(req,res,next){
    console.log('Request URL: '+req.url);
Pserson.find({},function(err,users){
    if (err) throw err;

    console.log(users);
})

    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'mafiarave_prod',
    });

    conn.query("SELECT * FROM models",function(err,rows){
        if(err) throw err;
            console.log(rows);
    });

    next();
});


app.get('/',function(req,res){
    res.render('index');
});

app.get('/person/:id',function(req,res){
    res.render('person',{ID:req.params.id, Qstr:req.query.qstr});
});

app.post('/personjson',jsonParser,function(req,res){
    res.send("Thank you for the JSON DATA");
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post('/person',urlencodedParser,function(req,res){
    res.send('Thank You!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.get('/api',function(req,res){
    res.json({ firstname:'John', lastname:'Prokopenko'});
});
app.listen(port);