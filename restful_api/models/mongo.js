var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
//var objectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var insertDocument = function(db, callback) {
   db.collection('workorder').insertOne( {
      "title" : "Fix my ATM now",
      "description" : "This is for test, so just take it easy!",
      "status" : 4,
	  "start_date" : new Date("2016-11-05T10:30:00Z")
   }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the workorder collection.");
    callback();
  });
};

var findWos = function(db, callback) {
   var cursor = db.collection('workorder').find( { "status": 4 } );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

mongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  insertDocument(db, function() {
      db.close();
  });
  /*
  findWos(db, function() {
      db.close();
  });*/
});

module.exports = mongoClient;