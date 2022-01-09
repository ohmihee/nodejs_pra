const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>hello world</h1>');
    res.end('<p>hello server</p>')
})

server.listen(3000);

server.on('listening',() => {
    console.log('3000 포트에서 서버 대기 중')
});
server.on('error',() => {
    console.error(error)
})