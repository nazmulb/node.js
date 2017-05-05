var fs = require("fs");

console.log("Going to create directory test/temp");
fs.mkdir('test/temp',function(err){
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});