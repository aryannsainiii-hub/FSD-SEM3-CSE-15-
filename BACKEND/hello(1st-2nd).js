//here import both thee function!
import { addition, subtraction } from "./maths.js";

console.log(addition(1, 1));
console.log(subtraction(1, 1));

const   EventEmitter = require('events');
const myEmitter = new EventEmitter();

//event listner
myemitter.on("click", () => {
    console.log("button onclicked");
});

//triggeer event 
myemitter.emit("click");
