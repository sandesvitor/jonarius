
class MockUsersDatabase {
    constructor(){
        this.users = [];
        this.currentId = 1;
    }

    getUsers(){
        return this.users;
    }

    createUser(name, email){
        const newUser = {
            id: this.currentId,
            name: name,
            email: email
        }
        this.currentId += 1;

        this.users.push(newUser);
    }

    getUserById(id){
        return this.users.find(user => user.id === id);
    }

    updateEmailById(id, email){
        let result = false;

        this.users.forEach(user => {
            if(user.id === id){
                user.email = email;
                result = true;
            } 
        });
        return result;
    }

    deleteUserById(id){
        const userIndex = this.users.findIndex(user => user.id === id);
    
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
            return true;
        }

        return false;
    }
}

module.exports = MockUsersDatabase;