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
- **Read request and return response** − The server created in an earlier step will read the HTTP request made by the client which can be a browser or a console and return the response.

## What is Callback?
Callback is an asynchronous equivalent for a function. A callback function is called at the completion of a given task. Node makes heavy use of callbacks. All the APIs of Node are written in such a way that they support callbacks.

## Blocking Code Example:
```
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");
```
## Non-Blocking Code Example:
```
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");
```

## Creating node.js application:
- **Step 1 - Import Required Module**
```
var http = require("http");
```  

- **Step 2 - Create Server**
```
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
```
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
