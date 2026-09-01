//make  function heree for addition and subtraction

function addition( a , b){
    return a+b;
}
function subtraction(a,b){
    return a-b;
}
export{addition,subtraction};

console.log("1. start");

setTimeout(() => {
    console.log("2. settimeout");
}, 0);

setImmediate(()=>{
    console.log("3. setimmiadate");
});

process.nextTick(()=>{
    console.log("4. nextick");
});