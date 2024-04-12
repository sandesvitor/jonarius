interface IDatabase {
    getUsers(): User[];
    addUser(name: string, email: string): void;
    getUserById(id: number): User | undefined;
    updateUserEmail(id: number, email: string): boolean;
    deleteUserById(id: number): boolean;
}

class MockDatabase implements IDatabase {
    private mockUsersDatabase: User[]
    private currentId: number 

    constructor() {
        this.mockUsersDatabase = []
        this.currentId = 1
    }

    public getUsers(): User[] {
        return this.mockUsersDatabase;
    }

    public addUser(name: string, email: string): void {
        const newUser: User = {id: this.currentId++, name, email};
        this.mockUsersDatabase.push(newUser);
    }

    public getUserById(id: number): User | undefined {
        return this.mockUsersDatabase.find(user => user.id === id);
    }

    public updateUserEmail(id: number, email: string): boolean {
        const index = this.mockUsersDatabase.findIndex(user => user.id === id);
        if (index !== -1) {
            this.mockUsersDatabase[index].email = email
            return true
        }
        return false;
    }

    deleteUserById(id: number): boolean {
        const index = this.mockUsersDatabase.findIndex(user => user.id === id);
        if (index !== -1) {
            this.mockUsersDatabase.splice(index, 1);
            return true;
        }
        return false;
    }
}

export default MockDatabase;
