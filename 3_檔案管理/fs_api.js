var rs = fs.createReadStream(pathname);

// rs.on('data',function(chunk){
//   rs.pause();
//   // 做完某事後才繼續讀取
//   dosomething(chunk,function({
//     rs.resume();
//   }));
// });
//
// rs.on('end',function(){
//   cleanUp();
// })


var ws = fs.createWriteStream(dst);
rs.on('data',function(chunk){
  if (ws.write(chunk) === false){
    rs.pause();
  }
});

rs.on('end',function(){
  ws.end();
});

ws.on('drain',function(){
  rs.resume();
})
