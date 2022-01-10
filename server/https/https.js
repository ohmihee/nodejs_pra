// 발급받은 인증서가 있는 경우 아래와 같이 코드를 짜면 됨
const https = require('https');
const fs = require('fs');

https.createServer({
    cert: fs.readFileSync('도메인 인증서 경로'),
    key: fs.readFileSync('도메인 비밀키 경로'),
    ca:[
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로')
    ],
}, (req,res) => {
    res.writeHead(200, {'Content-Type':'text/html; charset=uft-8'})
    res.write('<h1>hello node</h1>');
    res.end('<p>hello server!</p>')
})
    .listen(443, () => {
        // https의 기본 포트번호는 443
        // http의 기본 포트번호는 80
        console.log('server start 443')

    })