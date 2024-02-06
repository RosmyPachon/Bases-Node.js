const users = [
  {
    id: 1,
    name: "lunes",
  },
  {
    id: 2,
    name: "Martes",
  },
];

const getUserById = (id, callbacks) => {
    const user = users.find((user) =>{
        return user.id === id;
    })
    if (!user) {
        return callbacks(`User not found with id ${id}`);
    }
    return callbacks (null, user);
}

module.exports = {
    getUserById
}
