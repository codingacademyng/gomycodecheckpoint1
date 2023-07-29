//task two

var http = require('http'); 

var server = http.createServer(function (req, res) {  

   
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<h1>Hello Node!!!!</h1>\n');
        res.end();
    

});

server.listen(3000);

console.log('Node.js web server at port 3000 is running..')