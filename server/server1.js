const http = require('http');

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>hello node!</h1>');
    res.end('<p>hello Server</p>')
})
    .listen(3000, () => {
        console.log('3000 포트에서 시작')
    })

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>hello node!</h1>');
    res.end('<p>hello Server</p>')
})
    .listen(3001, () => {
        console.log('3001 포트에서 시작')
    })