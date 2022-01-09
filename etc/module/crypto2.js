const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = 'algmlalgmlalgmlalgmlalgmlalgmlas';
const iv = '1234567890123456';
const cipher = crypto.createCipheriv(algorithm,key,iv);
// crpto.createCipheriv(알고리즘,키,iv)
// 알고리즘 aes-256-cbc 를 이용하는 경우 키는 32바이트, iv는 16qkdlxmdudi gksek.
// crypto.getCiphers() 사용가능한 알고리즘 종류 불러옴

let result = cipher.update('암호화할문장','utf8','base64');
// cipher.update(문자열,인코딩,출력인코딩)
// 암호화활 대상과 대상의 인코딩,출력결과물의 인코딩
// 문자열은 utf8인코딩 암호는 base64를 보통 사용
result += cipher.final('base64');
// 출력결과물의 인코딩을 넣으면 암호화가 완료됨
console.log('암호화',result);

const decipher = crypto.createDecipheriv(algorithm,key,iv);
//
let result2 = decipher.update(result,'base64','utf8');
result2 += decipher.final('utf8');
// 복호화 결과물의 인코딩을 넣음
console.log('복호화',result2);

//console.log(crypto.getCiphers())

