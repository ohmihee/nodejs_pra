const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('event1', () => {
    console.log('이벤트 1')
})
myEvent.on('event2', () => {
    console.log('이벤트');
})
myEvent.on('event2', () => {
    console.log('이벤트2추가')
})
myEvent.on('event2', () => {
    console.log('이벤트2추가')
})
myEvent.once('event3',() => {
    console.log('이벤트3');
    // 한 번만 실행됨
})

myEvent.emit('event1');   // 이벤트 호출
myEvent.emit('event2');   // 이벤트 호출
myEvent.emit('event3');   // 이벤트 호출
myEvent.emit('event3');   // 실행 안 됨


myEvent.on('event4', () => {
    console.log('이벤트4')
})
myEvent.removeAllListeners('event4');
myEvent.emit('event4');

const listener = () => {
    console.log('이벤트5')
}

myEvent.emit('event5',listener);
myEvent.removeListener('event5',listener);
myEvent.emit('event5') // 실행 안 됨

console.log(myEvent.listenerCount('event2'))