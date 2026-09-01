const http = require("http");

const server = http.createServer((req, res) => {
    res.write("hello");
    res.end("hello");
})
server.listen(3000, () => {
    console.log("server is running on port 3000");
})