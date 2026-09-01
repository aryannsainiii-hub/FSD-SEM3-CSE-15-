const fs = require("fs");

//create
fs.writeFileSync("data.txt","hello student");

//read
const data = fs.readFileSync("data.txt","utf-8");

//update
fs.appendFileSync("data.txt","hello guys");

//read updated data
console.log(fs.readFileSync("data.txt","utf-8"));

//delete
fs.unlinkSync("data.txt");

console.log("file deleted");


//test 
const testfile = require("testfile");

testfile.createFile("test.txt","file has been created");

const testfile = readFileSync("test.txt","utf-8");
fs.appendFileSync("test.txt","file has been appended");
console.log(fs.readFileSync("test.txt","utf-8"));

console.log(fs.readFileSync("test.txt","utf-8"));