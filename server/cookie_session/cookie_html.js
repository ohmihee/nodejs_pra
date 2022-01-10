const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookies = ( cookie = '' ) =>
    cookie 
        .split(';')
        .map(v => v.split('='))
        .reduce((acc,[k,v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        },{})

http.createServer(async (req,res) => {
    const cookies = parseCookies(req.headers.cookie);
    if(req.url.startsWith('/login')){
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();

        expires.setMinutes(expires.getMinutes() + 5);
        res.writeHead(302,{
            Location:'/',
            'Set-Cookie':`name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();
    }else if(cookies.name){
        res.writeHead(200, {'Content-Type':'Text/plain; charset=utf-8'});
        res.end(`${cookies.name}님 안녕하세요.`)
    }else{
        try{
            const data = await fs.readFile('./cookie.html');
            res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
            res.end(data);
        }catch(err){
            res.writeHead(500,{'Content-Type':'text/plain; charset=utf-8'});
            res.end(err.message)
        }
    }
})

    .listen(3000, () => {
        console.log('server start 3000')
    })

    // 쿠키명=쿠키값 ex) mycookie=test 
    // Expires=날짜
    // max-age=초  해당초가 지나면 쿠키 제거됨, Expires보다 우선됨
    // Domain=도메인명   쿠기가 전송될 도메인 특정 가능 기본값은 현재 도메인
    // Path=URL  쿠키가 전송될 도메인 특정 가능 기본값은 '/'
    // Secure  Https일 경우에만 쿠키 전송
    // HttpOnly 해당 설정 시 자바스크립트에서 쿠키에 접근 불가.