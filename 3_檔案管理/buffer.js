//

var bin = new Buffer([0x68,0x65,0x6c,0x6c,0x6f]);

console.log(bin.toString('utf8')); // hello

sub = bin.slice(2)
console.log(sub.toString('utf8')); // llo


// copy buffer

var dup = new Buffer(bin.length);

bin.copy(dup);

console.log(dup.toString('utf8'));
