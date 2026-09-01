const os = require("os");
console.log("Free Memory: ", os.freemem());
console.log("OS version: ", os.version());
console.log("OS release: ", os.release());
console.log("OS platform: ", os.platform());
console.log("OS runtime: ", os.uptime());
console.log("Platform: ", os.platform());
console.log("Architecture: ", os.arch());
console.log("CPU info: ", os.cpus());