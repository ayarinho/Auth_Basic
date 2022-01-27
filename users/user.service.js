const users = [{ id: 1, username: 'youssef', password: 'test', firstName: 'ayari', lastName: 'Djo7' }];

module.exports = {
    authenticate,
    getAll
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}


