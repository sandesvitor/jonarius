"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor() {
        if (new.target === Database) {
            throw new TypeError("Cannot instantiate abstract class Database");
        }
    }
}
class MockDatabaseAbstract extends Database {
    mockUsersDatabase;
    currentId;
    constructor() {
        super();
        this.mockUsersDatabase = [];
        this.currentId = 1;
    }
    getUsers() {
        return this.mockUsersDatabase;
    }
    addUser(name, email) {
        const newUser = { id: this.currentId++, name, email };
        this.mockUsersDatabase.push(newUser);
    }
    getUserById(id) {
        return this.mockUsersDatabase.find(user => user.id === id);
    }
    updateUserEmail(id, email) {
        const index = this.mockUsersDatabase.findIndex(user => user.id === id);
        if (index !== -1) {
            this.mockUsersDatabase[index].email = email;
            return true;
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
exports.default = MockDatabaseAbstract;
