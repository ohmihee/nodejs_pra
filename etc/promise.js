// promise ==> 자바스크립트 비동기 처리에 사용되는 객체로,
//             이전 작업이 완료되지 않은 상태에서 다음 작업이 실행되어 발생되는 문제를 방지하기 위함.
// promise는 실행은 바로 하고 그 결과값은 실행이 완료된 후 then이나 catch로 받는 것.
const condition = true;
const promise = new Promise((resolve,reject)=>{
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

// 다른 코드가 들어갈 수 있음

promise
    .then((message)=>{
        console.log(message); // 성공(resolve)한 경우 실행
        // 성공
    })
    .catch((error)=>{
        console.log(error)  // 실패(reject)한 경우 실행
        // 실패
    })
    .finally(()=>{
        console.log('무조건')  // 끝나고 무조건 실행
    })

// promise 내부에서 resolve가 호출되면 then이 실행되고
//                  reject가 호출되면 catch가 실행된다.
//                  finally는 무조건 실행

// resolve와 reject에 넣어준 인수는 then과 catch의 매개변수에서 받을 수 있다.



//========================================================================

promise
    .then((message) => {
        return new Promise((resolve,reject)=>{
            resolve(`${message}`)
        })
    })
    // then이나 catch를 더 붙일 수도 있다.
    // 단 then에서 new Promise를 return해야 다음 then에서 받을 수 있다.
    .then((message2) => {
        return new Promise((resolve,reject)=>{
            // 성공2
            resolve(`${message2}`)
        })
    })
    .then((message3) => {
        console.log(message3);
    })
    .catch((error) => {
        console.error(error)
    })
