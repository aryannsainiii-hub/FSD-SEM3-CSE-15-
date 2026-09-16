const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.method);

    res.end("request received");
});
server.listen(3000);