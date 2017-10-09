var fs = require('fs');

var http = require('http');
http.createServer(function(req, res){

    if(req.url === '/api'){
        res.writeHead(200,{'Content-Type':'application/json'});
        
            var obj = {
                firstname: 'John',
                lastname: 'Caddy'
            };
        
            res.end(JSON.stringify(obj));
    }
    else if(req.url === '/'){
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else{
        res.writeHead(404);
        res.end();
    }

}).listen(1337,'127.0.0.1');