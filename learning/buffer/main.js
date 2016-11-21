var buf = new Buffer('my buffer content');
// accessing the 10th position of buf
console.log(buf[10]); // -> 99
console.log(buf.toString());
console.log(buf.length);

buf1 = new Buffer(256);
len = buf1.write("Simply Easy Learning");
console.log("Octets written : "+  len);
console.log(buf1.toString('utf8',0,6));

var buf3 = Buffer.concat([buf,buf1], (buf.length + buf1.length));
console.log(buf3.toString());


var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
}else if(result == 0){
   console.log(buffer1 +" is same as " + buffer2);
}else {
   console.log(buffer1 +" comes after " + buffer2);
}


var buffer1 = new Buffer('ABC');
//copy a buffer
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());