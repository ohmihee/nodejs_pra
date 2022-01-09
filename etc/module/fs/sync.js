// 동기적으로 작업 처리
// 즉 이전 작업이 완료된 후 다음 작업 시작.
// 동기메서드들은 뒤에 sync가 붙는다.
const fs = require('fs');

console.log('시작');

let data = fs.readFileSync('./readme.txt');
console.log('1번',data.toString());
data = fs.readFileSync('./readme.txt');
console.log('2번',data.toString());
data = fs.readFileSync('./readme.txt');
console.log('3번',data.toString());

console.log('끝');