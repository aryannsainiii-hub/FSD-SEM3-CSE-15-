// <!-- synchronous is a blocking architecture so the execution of each operation is dependent on the completion of the previous one. -->

const { rejects } = require("node:assert");
const { resolve } = require("node:dns");

function sum() {
  console.log("Starting sum operation...");
}
function example() {
  console.log("Starting example operation...");
  sum();
  console.log("Example operation completed.");
}
example();

// <!-- Asynchronous execution is a non-blocking architecture where operations can be executed independently, tasks can run simultaneously -->

function asyncSum() {
  console.log("Starting async sum operation...");
  setTimeout(() => {
    console.log("Async sum operation completed.");
  }, 2000);
}

function exampleAsync() {
  setTimeout(() => {
    console.log("Starting example async operation...");
    asyncSum();
    console.log("Example async operation completed.");
  }, 1000);
}
exampleAsync();

//PROMISES
// <!-- A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. -->
//STATE OF PROMISES
// <!-- A promise can be in one of three states: pending, fulfilled, or rejected. -->
// <!-- A promise is considered "pending" when it is still in progress and has not yet been resolved or rejected. -->
// <!-- A promise is considered "fulfilled" when it has been successfully resolved and has a resulting value. -->
// <!-- A promise is considered "rejected" when it has encountered an error or has been explicitly rejected. -->

//result promise can be handled using .then() and .catch() methods. The .then() method is used to handle the resolved value of a promise, while the .catch() method is used to handle any errors that may occur during the execution of the promise.
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("found data");
  }, 2000);
});

promise.then((result) => {
  console.log(result);
});


//rejct promise can be handled using .catch() method. The .catch() method is used to handle any errors that may occur during the execution of the promise.
const Promisee = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("data not found some error occurred");
  }, 2000);
});

Promisee.then((result) => {
  console.log(result);
})
.catch((error) => {
  console.error(error);
});


//write a node.js program to create a basic http server that handles different routes.
//the server shoulld;
//display "home page" when the user visits the root route ("/")
//display "about page" when the user visits the "/about" route
//display "404 page not found" when the user visits any other route
//provide a link to the home page and about page on the 404 page.
//run the server on port 3000 and log a message to the console when the server is running.


const http = require("http");

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html");

  if (request.url === "/") {
    response.end("home page");
  } else if (request.url === "/about") {
    response.end("about page");
  } else {
    response.statusCode = 404;
    response.end(
      '404 page not found<a href="/">Home page</a><br><a href="/about">About page</a>'
    );
  }
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});


//using node.js build an event module , create an eventemitter,register multiple listners  for a response event,then emit the event by passing name and id as arguments  and display them in the console
const EventEmitter = require("node:events");

const eventEmitter = new EventEmitter();

eventEmitter.on("response", (name, id) => {
  console.log(`Response received for ${name}, id: ${id}`);
});

eventEmitter.on("response", (name, id) => {
  console.log(`Processing response for ${name}, id: ${id}`);
});

eventEmitter.emit("response", "Alice", 101);


//using node.js built in http module create an http server that runs on port 3000 add return a json response for every request

