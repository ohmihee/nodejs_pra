const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
// body-parser는 본문의 데이터를 해석하여 req.body객체로 전달해주는 기능을 하는 미들웨어.
// 이미지, 동영상, 파일등의 멀티파트 이미지는 해석x 멀티파트 데이터는 multer모듈 사용.
const cookieParser = require('cookie-parser');
// 요청을 통해 전달된 쿠기를 해석애 req.cookies 객체로 만듦.
const session = require('express-session');
require('dotenv').config();
const path = require('path');

const app = express();

app.set('port',proscess.env.PORT||3000);
// app.set(키,값)을 사용해서 데이터 저장. 데이터 가져올 때는 app.get(키)로 가져옴.

app.use(morgan('dev'));  // dev combined common short tiny 등
// dev 기준  [HTTP메서드] [주소] [HTTP상태코드] [응답속도] - [응답바이트]
app.use('/',express.static(path.json(__dirname,'public')));
// static 미들웨어는 정적인 파일들을 제공하는 라우터 역할.

// 아래의 두 줄이 body-parser사용을 위한 세팅 코드
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.use(bodyParser.raw());   // 요청의 본문이 버퍼 데이터일때 추가 세팅
// app.use(bodyParser.text());  // 요청의 본문이 텍스트 데이터일때 추가 세팅

app.use(cookieParser(process.env.COOKIE_SECRET));
//app.use(cookieParser(비밀키))
/*
res.cookie('name','algml', {
    expires:new Date(Date.now() + 900000),
    httpOnly:true,
    secure:true
    // signed:true   // 쿠키를 만든 것 검증해줌. 
});
res.clearCookie('name','algml',{httpOnly:true,secure:true})

*/

//240ㅔㅎ
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false,
    },
    name:'session-cookie',
}))

app.use((req,res,next) => {
    console.log('모든 요청에 실행');
    next();
})