// 암호화를 도와주는 모듈

const crypto = require('crypto');

console.log('base64', crypto.createHash('sha512').update('password').digest('base64'));
// createHash(알고리즘)  사용할 해시 알고리즘
// update(문자열)  변환할 문자열
// digest(인코딩)  인코딩할 알고리즘  ex) base64, hax, latin1


// pbkdf2 알고리즘
// 기존 문자열에 salt라고 불리는 문자열을 붙인 후 해시 알고리즘을 반복해서 적용하는 것.
crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt',salt)
    crypto.pbkdf2('비밀번호',salt,100000,64,'sha512', (err, key) => {
        //pbkdf2(비밀번호,salt,반복횟수,출력바이트,해시알고리즘)
        console.log('password', key.toString('base64'));
    })
})
// randomBytes로 64바이트 길이의 문자열을 만든다. ==> 이게 바로 salt

// salt를 잘 보관해야함.
 
