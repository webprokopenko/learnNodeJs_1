var express =  require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({extended:false});


app.use('/assets',express.static(__dirname + '/public'));

app.set('view engine','ejs');


app.use('/',function(req,res,next){
    console.log('Request URL: '+req.url);
    next();
});


app.get('/',function(req,res){
    res.render('index');
});

app.get('/person/:id',function(req,res){
    res.render('person',{ID:req.params.id, Qstr:req.query.qstr});
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