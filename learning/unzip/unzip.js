// application/vnd.etsi.asic-e+zip

var yauzl = require("yauzl");
var fs = require("fs");
var i = 0;
yauzl.open("input/arve.asice", {lazyEntries: true}, function(err, zipfile) {
  if (err) throw err;
  zipfile.readEntry();
  zipfile.on("entry", function(entry) {
    if (/\/$/.test(entry.fileName)) {
      // Directory file names end with '/'.
      // Note that entires for directories themselves are optional.
      // An entry's fileName implicitly requires its parent directories to exist.
      zipfile.readEntry();
    } else {
      // file entry
      zipfile.openReadStream(entry, function(err, readStream) {
        i++; // test
        if (err) throw err;
        readStream.on("end", function() {
          zipfile.readEntry();
        });

        // readStream.pipe(process.stdout); //dump
        console.log(i);
        console.log(entry.fileName);

        // pump file contents
        var writeStream = fs.createWriteStream(entry.fileName);
        readStream.pipe(writeStream);
      });
    }
  });
});