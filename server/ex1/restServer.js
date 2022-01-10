const http = require('http');
const fs = require('fs').promises;

const users = {};

http.createServer(async (req,res) => {
    try{
        console.log(req.method, req.url);
        if(req.method === 'GET'){
            if(req.url === '/'){
                const data = await fs.readFile('./views/restFront.html');
                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
                return res.end(data);
            }else if(req.url === '/about'){
                const data = await fs.readFile('./views/about.html');
                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
                return res.end(data);
            }else if(req.url === '/users'){
                res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
                return res.end(JSON.stringify(users));
            }
            try {
                const data = await fs.readFile(`.${req.url}`);
                return res.end(data);
            }catch(err){
                res.writeHead(404);
                return res.end('not found')
            }
        }else if(req.method === 'POST'){
            if(req.url === '/user'){
                let body = '';
                req.on('data',(data)=>{
                    body+=data;
                });
                return req.on('end',()=>{
                    console.log('post 본문 (body)',body);
                    const {name} = JSON.parse(body);
                    const id = Date.now();
                    users[id] = name;
                    res.writeHead(201);
                    res.end('등록성공');
                });
            }
        }else if(req.method === 'put'){
            if(req.url.startsWith('/user/')){
                const key = req.url.split('/')[2];
                let body = '';
                req.on('data', (data)=>{
                    body += data;
                });
                return req.on('end', ()=>{
                    console.log('put 본문(body)',body);
                    users[key] = JSON.parse(body).name;
                    return res.end(JSON.stringify(users));
                });
            }
        }else if(req.method === 'DELETE'){
            if(req.url.startsWith('/user/')){
                const key = req.url.split('/')[2];
                delete users[key];
                return res.end(JSON.stringify(users));
            }
        }
        res.writeHead(404);
        return res.end('not found');
    }catch(err){
        console.error(err);
        res.writeHead(500);
        res.end(err);
    }
})
    .listen(3001, () => {
        console.log('3001 포트에서 시작')
    })