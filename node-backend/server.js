const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Welcome to the Homepage!");
  } else if (request.url === "/about") {
    response.end("This is the About page!");
  }  else if (request.url === "/users") {
    const users = [
      {
        id: 1,
        name: "Aryan",
        role: "Student",
      },
      {
        id: 2,
        name: "Rahul",
        role: "Developer",
      },
    ];

    response.setHeader("Content-Type", "application/json");

    response.end(JSON.stringify(users));
  } else {
    response.end("404 - Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
