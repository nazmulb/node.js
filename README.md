# Node.js

## Synchronous vs Asynchronous with examples?
**Synchronous** - You are in a queue to get a movie ticket. You cannot get one until everybody in front of you gets one, and the same applies to the people queued behind you.

**Asynchronous** - You are in a restaurant with many other people. You order your food. Other people can also order their food, they don't have to wait for your food to be cooked and served to you before they can order. In the kitchen restaurant workers are continuously cooking, serving, and taking orders. People will get their food served as soon as it is cooked.

## Asynchronous vs Parallel programming?

**Parallel programming** means executing operations At the same time using multiple threads, processes cpu's and or cores. Parallel programs distribute their tasks to multiple processors, that actively work on all of them simultaneously.

**Asynchronous programming** is to fire a request and provide a callback mechanism to receive the response. An asynchronous program dispatches tasks to devices that can take care of themselves, leaving the program free do something else until it receives a signal that the results are finished.

## What is node.js?
- Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). 
- Node.js was developed by Ryan Dahl in 2009. 
- Node made in C.
- It runs in a single thread with callback concept and has event based loop, so all executions become non-blocking.
- It provides you asynchronous, event driven I/O APIs.
- Node is a server which can execute JavaScript. Sort of a server side browser.
- Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications.
  
![Node Processing Model](https://raw.githubusercontent.com/nazmulb/node.js/master/node-processing-model.png)
  
## What are features of node.js?
- **Asynchronous and Event Driven** - All APIs of Node.js library are asynchronous, that is, non-blocking.
- **Very Fast** − Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution.
- **Single Threaded but Highly Scalable** − Node.js uses a single threaded model with event looping. Event mechanism helps the server to respond in a non-blocking way and makes the server highly scalable as opposed to traditional servers which create limited threads to handle requests.
- **No Buffering** − Node.js applications never buffer any data. These applications simply output the data in chunks.
	
## What are the Pros and Cons of node.js?
###### Pros:
1. Asynchronous event driven IO helps concurrent request handling.
2. Uses JavaScript, which is easy to learn.
3. Share the same piece of code with both server and client side.
4. npm, the Node packaged modules has already become huge, and still growing.
5. Active and vibrant community, with lots of code shared via github, etc.
6. You can stream big files.
  
###### Cons:
1. The main drawback is the consistency factor. Many Node.js development companies feel that the API keeps changing at frequent intervals.
2. Node.js doesn't work well with relational databases.
3. Node.js is not suited for CPU-intensive tasks. It is suited for I/O stuff only (like web servers). 

## Where to use node.js?
**Following are the areas where Node.js is proving itself as a perfect technology partner:**
- Web socket server or broadcasting applications
- Data streaming applications
- Data Intensive Real-time Applications (DIRT)
- JSON APIs based Applications
- Single Page Applications

## Where not to use node.js?
It is not advisable to use Node.js for CPU intensive applications.

## If I disabled javascript from browser then nodejs would run on browser?
Yes

## Is it possible to use multiple cores in node.js?
Yes, just because Node is designed without threads, doesn't mean you cannot take advantage of multiple cores in your environment. Child processes can be spawned by using our `child_process.fork()` API, and are designed to be easy to communicate with. Built upon that same interface is the `cluster` module, which allows you to share sockets between processes to enable load balancing over your cores.

## What are the three important components of node.js?
- **Import required modules** − We use the require directive to load Node.js modules.
- **Create server** − A server which will listen to client's requests similar to Apache HTTP Server.
- **Read request and return response** − Server can read the HTTP request made by the client which can be a browser or a console and return the response.

## What is Callback?
Callback is an asynchronous equivalent for a function. A callback function is called at the completion of a given task. Node makes heavy use of callbacks. All the APIs of Node are written in such a way that they support callbacks.

## Blocking Code Example:
```js
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");
```
## Non-Blocking Code Example:
```js
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");
```

## Creating node.js application:
- **Step 1 - Import Required Module**
```js
var http = require("http");
```  

- **Step 2 - Create Server**
```js
  http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
   
    // Send the response body as "Hello World"
    response.end('Hello World\n');
   }).listen(8081);

  // Console will print the message
  console.log('Server running at http://127.0.0.1:8081/');
```

- **Step 3 - Testing Request & Response**

Let's put step 1 and 2 together in a file called `main.js` and start our HTTP server as shown below:

```js
  var http = require("http");

  http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
  }).listen(8081);

  // Console will print the message
  console.log('Server running at http://127.0.0.1:8081/');
```

Now execute the `main.js` to start the server as follows:

```js
node main.js
```

Verify the Output. Server has started.

```
Server running at http://127.0.0.1:8081/
```

# Express.js

## What is Express.js?
Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.

## What are the core features of Express framework?
- Allows to set up middlewares to respond to HTTP Requests.
- Defines a routing table which is used to perform different actions based on HTTP Method and URL.
- Allows to dynamically render HTML Pages based on passing arguments to templates.

## How to install the Express framework?
The following way we can install the Express framework globally using NPM so that it can be used to create a web application using node terminal.
```
npm install express --save
```

## Hello world Example
Following is a very basic Express app which starts a server and listens on port 3000 for connection. This app responds with Hello World! for requests to the homepage. For every other path, it will respond with a 404 Not Found.

```js
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
```
Save the above code in a file named server.js and run it with the following command.
```
node server.js
```
Open http://127.0.0.1:8081/ in any browser to see the result.

## What is Middleware functions?
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

An Express application can use the following types of middleware:

- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware
- Third-party middleware

To load the middleware function, call app.use(), specifying the middleware function. For example, the following code loads the myLogger middleware function before the route to the root path (/).

```js
var express = require('express')
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000)
```

Every time the app receives a request, it prints the message “LOGGED” to the terminal.

The order of middleware loading is important: middleware functions that are loaded first are also executed first.

If myLogger is loaded after the route to the root path, the request never reaches it and the app doesn’t print “LOGGED”, because the route handler of the root path terminates the request-response cycle.

The middleware function myLogger simply prints a message, then passes on the request to the next middleware function in the stack by calling the next() function.

Next, we’ll create a middleware function called “requestTime” and add it as a property called requestTime to the request object.

```js
var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}
```

The app now uses the requestTime middleware function. Also, the callback function of the root path route uses the property that the middleware function adds to req (the request object).
```js
var express = require('express')
var app = express()

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})

app.listen(3000)
```

When you make a request to the root of the app, the app now displays the timestamp of your request in the browser.

Because you have access to the request object, the response object, the next middleware function in the stack, and the whole Node.js API, the possibilities with middleware functions are endless.

## Error-handling middleware

Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature (err, req, res, next)):

```js
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

## What is callback hell?
Asynchronous IO requires callbacks and running multiple sequential async operations requires nested callbacks and nested callbacks become hard to read. We can avoid this in several ways like using Promise, Async.js, Generators and co library and also using ES7 async/await.

**Example of nested callbacks:**

```js
app.post('/signup', function(req, res, next){
	duplicateUserNameCheck(req.body.username, function(err){
		if(err) return next(err);
		duplicateEmailCheck(req.body.email, function(err){
			if(err) return next(err);
			createUser(req.body, function(err, user){
				if(err) return next(err);
				createAccount(user, function(err, account){
					if(err) return next(err);
					sendWelcomeEmail(user, function(err){
						if(err) return next(err);
						loginUser(user, function(err){
							if(err) return next(err);
							res.redirect('/home');
						});
					});
				});
			});
		})
	})
})
```

### Avoiding Callback

#### Using Async.js (https://caolan.github.io/async/docs.html#.waterfall)

```js
var async = require('async');

async.waterfall([
	duplicateUserNameCheck,
	duplicateEmailCheck,
	createUser,
	createAccount,
	sendWelcomeEmail,
	loginUser,
], function(err, result){
	res.redirect('/home');
});
```

#### Using Promise

```js
app.post('/signup', function(req, res, next){
	duplicateUserNameCheck(req.body.username)
	.then(function(){
		return duplicateEmailCheck(req.body.email);
	})
	.then(function(){
		return createUser(req.body);
	})
	.then(createAccount)
	.then(sendWelcomeEmail)
	.then(loginUser)
	.then(function(){
		res.redirect('/home')
	})
	.catch(function(err){
		next(err);
	})
});
```

#### Using Generators and `co` library

```js
var co = require('co');

app.post('/signup', function(req, res, next){

	co(function *(){
		let isDuplicateUser = yield duplicateUserNameCheck(req.body.username);
		let isDuplicateEmail =  yield duplicateEmailCheck(req.body.email);

		let user = yield createUser(req.body);
		let account = yield createAccount(user);

		yield sendWelcomeEmail(user);

		yield loginUser(user);

		res.redirect('/home');
	})
	.catch(function(err){
		next(err);
	})
});
```

#### Using ES7 `async/await`

```js
app.post('/signup', function(req, res, next){

	try{
		let isDuplicateUser = await duplicateUserNameCheck(req.body.username);
		let isDuplicateEmail = await duplicateEmailCheck(req.body.email);

		let user = await createUser(req.body);
		let account = await createAccount(user);

		await sendWelcomeEmail(user);

		await loginUser(user);

		res.redirect('/home');
	}
	catch(e){
		next(err);
	}
});
```

## What is the need of package.json?
- It serves as documentation for what packages your project depends on.
- It allows you to specify the versions of a package that your project can use using semantic versioning rules.
- Makes your build reproducable which means that its way easier to share with other developers.

## As a bare minimum, a package.json must have:

- **"name"**
- all lowercase
- one word, no spaces
- dashes and underscores allowed

- **"version"**
- in the form of x.x.x
- follows semver spec

## Creating a package.json

To create a package.json run:
```
npm init
```
This will initate a command line questionnaire that will conclude with the creation of a package.json in the directory you initiated the command.

**The --yes init flag**

You can get a default package.json by running npm init with the --yes or -y flag:
```
npm init --yes
```
This will ask you only one question, author. Otherwise it will fill in default values.

# MongoDB

## What is MongoDB?
MongoDB is a cross-platform, document oriented database that provides, high performance, high availability, and easy scalability. MongoDB works on concept of collection and document. MongoDB is an open-source document database and leading NoSQL database. MongoDB is written in C++.

## Database
Database is a physical container for collections. Each database gets its own set of files on the file system. A single MongoDB server typically has multiple databases.

## Collection
Collection is a group of MongoDB documents. It is the equivalent of an RDBMS table. A collection exists within a single database. Collections do not enforce a schema. Documents within a collection can have different fields. Typically, all documents in a collection are of similar or related purpose.

## Document
A document is a set of key-value pairs. Documents have dynamic schema. Dynamic schema means that documents in the same collection do not need to have the same set of fields or structure, and common fields in a collection's documents may hold different types of data. The following table shows the relationship of RDBMS terminology with MongoDB.

| RDBMS | MongoDB |
| --- | --- |
| Database | Database |
| Table | Collection |
| Row | Document |
| column | Field |
| Table Join | Embedded Documents |
| Primary Key | Primary Key (Default key _id provided by mongodb itself) |

## Sample Document
Following example shows the document structure of a blog site, which is simply a comma separated key value pair.
```mongodb
{
   _id: ObjectId(7df78ad8902c)
   title: 'MongoDB Overview',
   description: 'MongoDB is no sql database',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100,
   comments: [
      {
         user:'user1',
         message: 'My first comment',
         dateCreated: new Date(2011,1,20,2,15),
         like: 0
      },
      {
         user:'user2',
         message: 'My second comments',
         dateCreated: new Date(2011,1,25,7,45),
         like: 5
      }
   ]
}
```
_id is a 12 bytes hexadecimal number which assures the uniqueness of every document. You can provide _id while inserting the document. If you don’t provide then MongoDB provides a unique id for every document. These 12 bytes first 4 bytes for the current timestamp, next 3 bytes for machine id, next 2 bytes for process id of MongoDB server and remaining 3 bytes are simple incremental VALUE.

## What are the advantages of MongoDB over RDBMS?
- Schema less − MongoDB is a document database in which one collection holds different documents. Number of fields, content and size of the document can differ from one document to another.
- No complex joins.
- Deep query-ability. MongoDB supports dynamic queries on documents using a document-based query language that's nearly as powerful as SQL.
- Tuning.
- Ease of scale-out − MongoDB is easy to scale.
- Conversion/mapping of application objects to database objects not needed.
- Uses internal memory for storing the (windowed) working set, enabling faster access of data.

## Why Use MongoDB?
- Document Oriented Storage − Data is stored in the form of JSON style documents
- Index on any attribute
- Replication and high availability
- Auto-sharding
- Rich queries
- Fast in-place updates
- Professional support by MongoDB

## Where to Use MongoDB?
- Big Data
- Content Management and Delivery
- Mobile and Social Infrastructure
- User Data Management
- Data Hub

## What are the disadvantages of MongoDB?
- No transaction
- No join
- MongoDB is very memory hungry. Your server will need a lot of RAM

## Some considerations while designing Schema in MongoDB
- Design your schema according to user requirements.
- Combine objects into one document if you will use them together. Otherwise separate them (but make sure there should not be need of joins).
- Duplicate the data (but limited) because disk space is cheap as compare to compute time.
- Do joins while write, not on read.
- Optimize your schema for most frequent use cases.
- Do complex aggregation in the schema.

## Example
Suppose a client needs a database design for his blog/website and see the differences between RDBMS and MongoDB schema design. Website has the following requirements.

- Every post has the unique title, description and url.
- Every post can have one or more tags.
- Every post has the name of its publisher and total number of likes.
- Every post has comments given by users along with their name, message, data-time and likes.
- On each post, there can be zero or more comments.

In RDBMS schema, design for above requirements will have minimum three tables.

![RDBMS](https://raw.githubusercontent.com/nazmulb/node.js/master/rdbms.png)

While in MongoDB schema, design will have one collection post and the following structure

```mongodb
{
   _id: POST_ID
   title: TITLE_OF_POST,
   description: POST_DESCRIPTION,
   by: POST_BY,
   url: URL_OF_POST,
   tags: [TAG1, TAG2, TAG3],
   likes: TOTAL_LIKES,
   comments: [
      {
         user:'COMMENT_BY',
         message: TEXT,
         dateCreated: DATE_TIME,
         like: LIKES
      },
      {
         user:'COMMENT_BY',
         message: TEXT,
         dateCreated: DATE_TIME,
         like: LIKES
      }
   ]
}
```

So while showing the data, in RDBMS you need to join three tables and in MongoDB, data will be shown from one collection only.

## MongoDB supports many datatypes. Some of them are −
- **String** − This is the most commonly used datatype to store the data. String in MongoDB must be UTF-8 valid.
- **Integer** − This type is used to store a numerical value. Integer can be 32 bit or 64 bit depending upon your server.
- **Boolean** − This type is used to store a boolean (true/ false) value.
- **Double** − This type is used to store floating point values.
- **Min/ Max keys** − This type is used to compare a value against the lowest and highest BSON elements.
- **Arrays** − This type is used to store arrays or list or multiple values into one key.
- **Timestamp** − ctimestamp. This can be handy for recording when a document has been modified or added.
- **Object** − This datatype is used for embedded documents.
- **Null** − This type is used to store a Null value.
- **Symbol** − This datatype is used identically to a string; however, it's generally reserved for languages that use a specific symbol type.
- **Date** − This datatype is used to store the current date or time in UNIX time format. You can specify your own date time by creating object of Date and passing day, month, year into it.
- **Object ID** − This datatype is used to store the document’s ID.
- **Binary data** − This datatype is used to store binary data.
- **Code** − This datatype is used to store JavaScript code into the document.
- **Regular expression** − This datatype is used to store regular expression.

## Some Commands
To create/use a database
```mongobd
>use mydb
```

To show all databases
```mongobd
>show dbs
```

To drop database
```mongobd
>db.dropDatabase()
```

To create a collection named movie
```mongobd
>db.createCollection("movie")
```

To drop a collection named movie
```mongobd
>db.movie.drop()
```

To show all collections
```mongobd
>show collections
```

To insert a document in movie collection
```mongobd
>db.movie.insert({"name":"IP Man3", "likes":100, "tag":["action"]})
```

To query data from MongoDB collection in a formatted way
```mongobd
>db.movie.find().pretty()
{
    "_id" : ObjectId("58638408f133b3ec483c719f"),
    "name" : "IP Man3",
    "likes": 100,
    "tag": [
            "action"
    ]
}
```

To update a document in movie collection
```mongobd
>db.movie.update({'name':'IP Man3'}, {$set:{'likes':101}})
```

To remove a document in movie collection
```mongobd
>db.movie.remove({'name':'IP Man3'})
```