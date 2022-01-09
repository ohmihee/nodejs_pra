const fs = require('fs').promises;
const constants = require('fs').constants

fs.access('./folder',constants.F_OK | constants.W_OK | constants.R_OK)
    .then(()=>{
        return Promise.reject('폴더있음')
    })
    .catch((err)=>{
        if(err.code==='ENOENT'){
            console.log('폴더없음');
            return fs.mkdir('./folder');
        }
        return Promise.reject(err)
    })
    .then(()=>{
        console.log('폴더만들기성공');
        return fs.open('./folder/file.js','w');
        // fs.open(경로,옵션,콜백)
        // 파일의 아이디(fd 변수)를 가져오는 메서드
        // 파일이 없으면 파일을 생성한뒤 그 아이드를 가져옴.
        // w ==> 쓰기  r ==> 읽기 a ==> 기존파일에 추가
    })
    .then((fd)=>{
        console.log('빈파일만들기성공',fd);
        return fs.rename('./folder/file.js','./folder/newFile.js');
    })
    .then(()=>{
        console.log('이름바꾸기성공');
    })
    .catch((err)=>{
        console.error((err))
    })