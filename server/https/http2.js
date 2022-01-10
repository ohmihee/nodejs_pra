// SSL암호화와 더불어 요청 및 응답 방식이 기존의 http/1.1보다 개선되어 훨씬 효율적 요청. 웹의 속도 개선
const https = require('http2');
const fs = require('fs');

https.createSecureServer({
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