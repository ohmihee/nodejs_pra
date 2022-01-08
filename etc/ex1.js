// 프로미스 여러 개를 한 번에 실행
// Promise.all([])
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
const promise3 = Promise.resolve('성공3');
// Promise.resolve()는 즉시 resolve하는 프로미스를 만드는 방법
// Promise.reject()는 즉시 reject하는 프로미스를 만드는 방법

Promise.all([promise1,promise2,promise3])
    .then((result) => {
        console.log(result);
        // ['성공1','성공2']
    })
    .catch((error) => {
        console.error(error)
    })