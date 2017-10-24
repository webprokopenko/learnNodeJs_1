var MongoClient = require('mongodb').MongoClient
, assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/chat';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
var collection = db.collection('test_insert');
collection.insert({a:2},function(err,docs){
        console.dir(docs);
    });
});
collection.find().toArray(function(err, results){
    console.dir(results);
});

collection.remove({},function(err,affected){
    if(err) throw err;
        collection.insert({a:2},function(err,docs){
            
            });
    
});
db.close();

