// setTimeout(function(){
//   console.log('world');
// } , 1000)
//
// console.log('hello');

for (var i=0;i<5;i++){
  setTimeout(myPrint(i),1000)
}

function myPrint(k){
  return console.log(k)
}
