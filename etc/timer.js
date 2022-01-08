// setTimeout
// setTimeout(콜백함수, 밀리초)
// setInterval
// setInterval(콜백함수, 밀리초)
// setImmediate
// setImmediate(콜백함수)

const call_back = () => {
    console.log('callback')
}
const call_back1 = () => {
    console.log('callback1')
}
const call_back2 = () => {
    console.log('callback2')
}

const test1 = setTimeout(call_back1,3000)
const test2 = setInterval(call_back2,2000)
const test = setImmediate(call_back);

// clearTimeout
// clearInterval
// cleatImmediate
setTimeout(()=>{
    clearInterval(test2);
},10000)
