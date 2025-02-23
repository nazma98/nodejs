const { v4: uuidv4 } = require('uuid');
const { use } = require('../router/userRouter');

const users = [
    {
        "_id": uuidv4(),
        "name": "John Doe",
        "email": "johndoe@example.com",
        "age": 30,
        "role": "Admin"
    },
    {
        "_id": uuidv4(),
        "name": "Jane Smith",
        "email": "janesmith@example.com",
        "age": 28,
        "role": "Editor"
    },
    {
        "_id": uuidv4(),
        "name": "Alice Johnson",
        "email": "alicejohnson@example.com",
        "age": 25,
        "role": "Viewer"
    },
    {
        "_id": uuidv4(),
        "name": "Bob Brown",
        "email": "bobbrown@example.com",
        "age": 35,
        "role": "Moderator"
    }
];

const getAllUsers = () => users;

const createUser = (userPayload) => {
    const newUser = { _id: uuidv4(), ...userPayload };
    users.unshift(newUser);
    return newUser;
}

const updatedUser = (id, payload) => {
    const updatedUserIndex = users.findIndex((user) => user._id === id);

    if (updatedUserIndex === -1) {
        throw new Error(` No user with id ${id}`);
    }

    users[updatedUserIndex] = { ...users[updatedUserIndex], ...payload };
    return users[updatedUserIndex];
}

const deleteUser = (id) => {
    const deleteUserIndex = users.findIndex((user) => user._id === id);

    if(deleteUserIndex === -1) {
        throw new Error(` No user with id ${id}`);
    }

    users.splice(deleteUserIndex, 1);
    return users;
}

module.exports = {
    getAllUsers,
    createUser,
    updatedUser,
    deleteUser,
};