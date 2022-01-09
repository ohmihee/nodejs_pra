const fs = require('fs');

console.log('시작');
fs.readFile('./readme.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('1번',data.toString());
});
fs.readFile('./readme.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('2번',data.toString());
});
fs.readFile('./readme.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log('3번',data.toString());
});
console.log('끝')

// 비동기 메서드들은 백그라운드에 해당 파일을 읽으라고 요청후 다음 작업으로 넘어감
// 이후 읽기가 완료되면 백드라운드가 다시 메인스레드에 알리고 메인스레드는 그때에 등록된 콜백함수를 실행.
// I/O요청이 들어오면 메인 스레드는 백그라운드에 요청처리를 위임. 나중에 백그라운드로부터 요청처리가 완료되었다고 하면, 그때 콜백함수 실행.

