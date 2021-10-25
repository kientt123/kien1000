var http = require('http');

var server = http.createServer((req, res) => {
    if (req.url == '/') {
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content    
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    } else if (req.url == '/student') {
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content    
        res.write('<html><body><p style="color : red">This is Student Page.</p></body></html>');
        res.end();
    }
})
server.listen(5000)
console.log("server is running!")