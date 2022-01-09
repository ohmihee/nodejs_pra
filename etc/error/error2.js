process.on('uncaughtException',(err)=>{
    console.error('예기치 못한 에러',err)
})

setInterval(()=>{
    throw new Error('서버 고장내기')
},1000);

setTimeout(()=>{
    console.log('실행됨')
},2000)

// 처리하지 못한 에러가 발생시 이벤트 리스너가 실행되어 프로세스가 유지됨.