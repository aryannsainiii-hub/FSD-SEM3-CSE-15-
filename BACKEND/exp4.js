const http = require("http");

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

const server = http.createServer((request, response) => {
  // GET all users
  if (request.url === "/users" && request.method === "GET") {
    response.setHeader("Content-Type", "application/json");

    response.end(JSON.stringify(users));
  }

  // POST a new user
  else if (request.url === "/users" && request.method === "POST") {
    response.end("User created successfully!");
  } else {
    response.statusCode = 404;
    response.end("Route not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
