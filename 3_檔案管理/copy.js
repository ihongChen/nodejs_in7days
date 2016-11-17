// // 利用資料流複製較大的檔案
//
// var fs = require('fs');
//
// function copy(src,dst){
//   fs.createReadStream(src).pipe(fs.createWriteStream(dst));
// }
//
// function main(argv){
//   copy(argv[0],argv[1]);
// }

// 資料較小可以先打開讀取後存取

var fs = require('fs');

function copy(src,dst){
  fs.writeFileSync(dst,fs.readFileSync(src));
}

function main(argv){
  copy(argv[0],argv[1]);
}

main(process.argv.slice(2));
