var fs = require('fs');

var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var html = fs.createReadStream(__dirname + '/index.html').pipe(res);
    

}).listen(1337,'127.0.0.1');