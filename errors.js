/**
 * Created by Miss Esc on 2017/6/15.
 */
const fs = require('fs');

/** catch and callback
try {
  fs.readFile('/some/file/that/does-not-exist', (err, data)=> {
    if (err) {
      throw err;
    }
  })
} catch (err) {
  console.error(err);
}
 */

/** by event
const net = require('net');
const connection = net.connect('localhost');

connection.on('error', (err)=> {
  console.error(err);
});

connection.pipe(process.stdout);
 */


/** 没有error事件处理，讲导致process奔溃
const EventEmitter=require('events');
const ee=new EventEmitter();

setImmediate(()=>{
  ee.emit('error',new Error('This will crash'));
});
*/