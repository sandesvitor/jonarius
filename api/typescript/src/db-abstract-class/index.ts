abstract class Database {
    constructor() {
        if (new.target === Database) {
            throw new TypeError("Cannot instantiate abstract class Database");
        }
    }

    abstract getUsers(): User[];
    abstract addUser(name: string, email: string): void;
    abstract getUserById(id: number): User | undefined;
    abstract updateUserEmail(id: number, email: string): boolean;
    abstract deleteUserById(id: number): boolean;
}

class MockDatabaseAbstract extends Database {
    private mockUsersDatabase: User[]
    private currentId: number 

    constructor() {
        super()
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

export default MockDatabaseAbstract;
