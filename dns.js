/**
 * Created by Miss Esc on 2017/6/14.
 */

const dns=require('dns');

// dns.lookup('www.baidu.com',function (err,address,family) {
//   console.log('address:%j family:IPv%s',address,family);
// });


dns.resolve4('www.baidu.com',(err,addresses)=>{
  if(err) throw  err;
  console.log(`addresses:${JSON.stringify(addresses)}`);
});
