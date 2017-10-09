var fs = require('fs');

var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var html = fs.readFileSync(__dirname + '/index.html','utf8');
    var message = "HELLO WORLD!!!";
    html = html.replace('{Message}',message);
    res.end(html);

}).listen(1337,'127.0.0.1');