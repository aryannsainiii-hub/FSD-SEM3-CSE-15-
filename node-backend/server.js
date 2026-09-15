// const http = require("http");
// const users = [];

// const server = http.createServer((request, response) => {
//   if (request.url === "/") {
//     response.end("Welcome to the Homepage!");
//   } else if (request.url === "/about") {
//     response.end("This is the About page!");
//   } else if (request.url === "/users" && request.method === "POST") {
//     let body = "";

//     request.on("data", (chunk) => {
//       body += chunk;
//     });

//     request.on("end", () => {
//       const newUser = JSON.parse(body);

//       users.push(newUser);

//       response.setHeader("Content-Type", "application/json");
//       response.statusCode = 201;

//       response.end(
//         JSON.stringify({
//           message: "User created successfully!",
//           user: newUser,
//         })
//       );
//     });
//   } else {
//     response.statusCode = 404;
//     response.end("Not Found");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

// const express = require("express");

// const app = express();

// app.get("/", (request, response) => {
//   response.send("Hello! My Express backend is running.");
// });

// app.post("/about", (request, response) => {
//   response.send("Hello! My Express backend about page is running.");
// });

// app.post("/users/apis", (request, response) => {
//   response.send("Hello! My Express backend apis is running.");
// });

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });

// const express = require("express");

// const app = express();

// app.use(express.json()); // Middleware to parse JSON request bodies

// app.use((request, response, next) => {
//   console.log("a request is coming in...");

//   next(); // Call the next middleware or route handler
// });

// const users = [
//   {
//     id: 1,
//     name: "Aryan",
//     role: "Student",
//   },
//   {
//     id: 2,
//     name: "Rahul",
//     role: "Developer",
//   },
//   {
//     id: 3,
//     name: "Priya",
//     role: "Designer",
//   },
// ];

// //validation for user creation
// app.post("/api/users", (request, response) => {
//   const { name, role } = request.body;
//   if (
//     !name ||
//     !role ||
//     typeof name !== "string" ||
//     typeof role !== "string" ||
//     name.trim() === "" ||
//     role.trim() === ""
//   ) {
//     return response.status(400).json({ message: "Name and role are required" });
//   }
//   const newUser = {
//     id: users.length + 1,
//     name: name,
//     role: role,
//   };
//   users.push(newUser);
//   response.status(201).json({
//     message: "User created successfully!",
//     user: newUser,
//   });
// });

// // Home route
// app.get("/", (request, response) => {
//   response.send("Hello! My Express backend is running.");
// });

// // About route
// app.get("/about", (request, response) => {
//   response.send("Welcome to the About page!");
// });

// // Get all users
// app.get("/api/users", (request, response) => {
//   response.json(users);
// });

// app.get("/api/users/:id", (request, response) => {
//   const userId = Number(request.params.id);
//   const user = users.find((user) => user.id === userId);
//   if (!user) {
//     return response.status(404).json({ message: "User not found" });
//   }
//   response.json(user);
// });

// app.put("/api/users/:id", (request, response) => {
//   const userId = Number(request.params.id);
//   const user = users.find((user) => user.id === userId);
//   if (!user) {
//     return response.status(404).json({ message: "User not found" });
//   }
//   //updating user details
//   if (!name ||
//     !role ||
//     typeof name !== "string" ||
//     typeof role !== "string" ||
//     name.trim() === "" ||
//     role.trim() === "") {
//     return response.status(400).json({ message: "Name and role are required" });
//   }
//   user.name = name;
//   user.role = role;
//   response.json({
//     message: "User updated successfully!",
//     user: user,
//   });
// });

// //delete user
// app.delete("/api/users/:id", (request, response) => {
//   const userId = Number(request.params.id);
//   const userIndex = users.findIndex((user) => user.id === userId);
//   if (userIndex === -1) {
//     return response.status(404).json({ message: "User not found" });
//   }
//   const deletedUser = users.splice(userIndex, 1);
//   response.json({
//     message: "User deleted successfully!",
//     user: deletedUser[0],
//   });
// });

// // Start server
// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });

const express = require("express");

const app = express();

const errorHandler = require("./middleware/errorMiddleware");

// Middleware
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");

// Basic routes
app.get("/", (request, response) => {
  response.send("Hello! My Express backend is running.");
});

app.get("/about", (request, response) => {
  response.send("Welcome to the About page!");
});

// User routes
app.use("/api/users", userRoutes);

app.use(errorHandler); // Error handling middleware

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});