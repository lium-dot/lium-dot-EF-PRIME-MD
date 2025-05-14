const users = [
  { id: 1, name: 'Frank', email: 'efkidgamer@gmail.com', role: 'admin'}
];

function getUser(id) {
  return users.find(user => user.id === id);
}

function getAllUsers() {
  return users;
}

function addUser(user) {
  const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
  const newUser = { ...user, id: newId };
  users.push(newUser);
  return newUser;
}

function updateUser(id, updates) {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return null;
  
  users[index] = { ...users[index], ...updates };
  return users[index];
}

function deleteUser(id) {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return false;
  
  users.splice(index, 1);
  return true;
}

module.exports = {
  getUser,
  getAllUsers,
  addUser,
  updateUser,
  deleteUser
};