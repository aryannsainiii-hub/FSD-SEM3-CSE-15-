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
  {
    id: 3,
    name: "Priya",
    role: "Designer",
  },
];

// GET all users
const getUsers = (request, response) => {
  response.json(users);
};

// GET user by ID
const getUserById = (request, response) => {
  const userId = Number(request.params.id);

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return response.status(404).json({
      message: "User not found",
    });
  }

  response.json(user);
};

// POST create user
const createUser = (request, response) => {
  const { name, role } = request.body;

  if (
    !name ||
    !role ||
    typeof name !== "string" ||
    typeof role !== "string" ||
    name.trim() === "" ||
    role.trim() === ""
  ) {
    return response.status(400).json({
      message: "Name and role must be valid strings",
    });
  }

  const newUser = {
    id: users.length + 1,
    name: name,
    role: role,
  };

  users.push(newUser);

  response.status(201).json({
    message: "User created successfully!",
    user: newUser,
  });
};

// PUT update user
const updateUser = (request, response) => {
  const userId = Number(request.params.id);

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return response.status(404).json({
      message: "User not found",
    });
  }

  const { name, role } = request.body;

  if (
    !name ||
    !role ||
    typeof name !== "string" ||
    typeof role !== "string" ||
    name.trim() === "" ||
    role.trim() === ""
  ) {
    return response.status(400).json({
      message: "Name and role must be valid strings",
    });
  }

  user.name = name;
  user.role = role;

  response.json({
    message: "User updated successfully!",
    user: user,
  });
};

// DELETE user
const deleteUser = (request, response) => {
  const userId = Number(request.params.id);

  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return response.status(404).json({
      message: "User not found",
    });
  }

  const deletedUser = users.splice(userIndex, 1);

  response.json({
    message: "User deleted successfully!",
    user: deletedUser[0],
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
