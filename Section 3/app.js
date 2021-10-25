const http = require('http');

// function rqListener(req, res) {
// }
// http.createServer(rqListener);

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write(
        `
        <html> 
            <head>
                <title>My first page</title>
            </head>
            <body>
                <h1>Hello from Node.js</h1>
            </body>
        </html>
        `
    );
    res.end();
    // process.exit();
});

server.listen(3000);