/**
 * Created by Miss Esc on 2017/6/15.
 */


const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
}

/** 基础用法
 const myEmitter = new MyEmitter();

 myEmitter.on('event', ()=> {
  console.log('an event occurred!')
});
 myEmitter.emit('event');

 */

/** 传参数
 const myEmitter = new MyEmitter();
 myEmitter.on('event', function (a, b) {
  console.log(a, b, this);
});

 myEmitter.emit('event', 'a', 'b');
 */

/** 箭头函数
 const myEmitter = new MyEmitter();
 myEmitter.on('event', (a, b)=> {
  console.log(a, b, this);
});
 myEmitter.emit('event', 'a', 'b');
 */

/** 默认同步执行，也可以使用setImmediate变为异步
 const myEmitter = new MyEmitter();

 myEmitter.on('event', (a, b)=> {
  setImmediate(()=> {
    console.log('this happens asynchronously');
  });
});

 myEmitter.emit('event', 'a', 'b');
 */

/** once
 const myEmitter = new MyEmitter();
 let m = 0;
 myEmitter.once('event', () => {
  console.log(++m);
});
 myEmitter.emit('event');
 myEmitter.emit('event');
 */

// const myEmitter = new MyEmitter();
// process.on('uncaughtException', (err)=> {
//   console.log('whoops! there was an error');
// });
//
// myEmitter.emit('error', new Error('whoops!'));


const abEmitter = new MyEmitter();
abEmitter.on('error', err=> {
  console.error(err);
});

abEmitter.emit('error',new Error('whoops!'));