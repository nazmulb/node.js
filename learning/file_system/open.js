var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('../../input.txt', 'r+', function(err, fd) { 
	/*fd <Number> Integer file descriptor. A file descriptor (FD, less frequently fildes) is an abstract indicator (handle) used to access a file or other input/output resource, such as a pipe or network socket.*/
	
   if (err) {
      return console.error(err);
   }
  console.log("File opened successfully!"+fd.toString());     
});