console.log("hello world")
console.log(3*4)
console.log(5%2)
console.log("hello world!!")
// let name = prompt("enter name");
// alert("hello");
let str = "javascript";
str.substring(0,4)
console.log(str)
console.log("this is a simple js  prog");
console.log("goodbey!!");
console.error("this is an error  message");
console.warn("this is  a warning message");
console.info("this is a informatioanl message");
console.debug("this is  a debug message");
console.log(process.platform);
console.log(globalThis.Lnumber);
global.Lnumber = "51";
console.log(global.Lnumber);
                        //EXIT EVENT
process.on('exit',function(){

    console.log("good");
})
const{EventEmitter} = require('events');
const  eventEmitter =  new EventEmitter();
eventEmitter.on('lunch',()=>{

console.log('welcome')
})
eventEmitter.emit('lunch')



console.log("mavii")
console.log("mavii");

// npm install express --save
//npm i -g nodemon 
//npm instgall -- save-dev nodemon

const shyam = require("./XYZ");
console.log("hello",shyam)