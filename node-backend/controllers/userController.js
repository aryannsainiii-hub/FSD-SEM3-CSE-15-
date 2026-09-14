const users = [{
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

const getUsers = (request, response) => {
    response.json(users);
}
const getUserById = (request, response) => {
    const userId = Number(request.params.id);
    const user = users.find((user) => user.id === userId);

    if (!user) {
        return response.status(404).json({ message: "User not found" });
    }
    response.json(user);
};

module.exports = {
    getUsers,
    getUserById,
};