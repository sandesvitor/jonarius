class IDatabase {
    constructor() {
        if (new.target === IDatabase) {
            throw new TypeError("Cannot instantiate abstract class DatabaseInterface")
        }
    }

    getUsers() {
        throw new Error("Method 'getUsers' must be implemented");
    }

    addUser(name, email) {
        throw new Error("Method 'addUser' must be implemented");
    }

    getUserById(id) {
        throw new Error("Method 'getUserById' must be implemented");
    }

    updateUserEmail(id, email) {
        throw new Error("Method 'updateUserEmail' must be implemented");
    }

    deleteUserById(id) {
        throw new Error("Method 'deleteUserById' must be implemented");
    }
}

class MockDatabase extends IDatabase {
    constructor() {
        super()
        this.mockUsersDatabase = []
        this.currentId = 1
    }

    getUsers() {
        return this.mockUsersDatabase;
    }

    addUser(name, email) {
        const newUser = {
            id: this.currentId++,
            name: name,
            email: email
        };
        this.mockUsersDatabase.push(newUser);
        return newUser;
    }

    getUserById(id) {
        return this.mockUsersDatabase.find(user => user.id === id);
    }

    updateUserEmail(id, email) {
        const index = this.mockUsersDatabase.findIndex(user => user.id === id);
        if (index !== -1) {
            this.mockUsersDatabase[index].email = email
            return true
        }
        return false;
    }

    deleteUserById(id) {
        const index = this.mockUsersDatabase.findIndex(user => user.id === id);
        if (index !== -1) {
            this.mockUsersDatabase.splice(index, 1);
            return true;
        }
        return false;
    }
}

class Database extends IDatabase {
    constructor() {
        super()
    }

    getUsers() {
        return;
    }

    addUser(name, email) {
        return
    }

    getUserById(id) {
        return
    }

    updateUserEmail(id, email) {
        return
    }

    deleteUserById(id) {
        return
    }
}

module.exports = { 
    MockDatabase,
    Database
}
