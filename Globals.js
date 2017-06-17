/**
 * Created by unnKoel on 2017/6/17.
 */
let path=require('path');
console.log(__dirname);

console.log(path.dirname(__filename));

console.log(__filename);

//global:In Node.js this is different. The top-level scope is not the global scope; var something inside a Node.js module will be local to that module
