class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    static sayHello(){
        console.log("Hello, I'm a static method for this class!")
    }

    sayHello(){
        console.log(`Welcome ${this.name}, your email is ${this.email}, this is not a static method, therefore it needs to be instantiated`)
    }
}

module.exports = User
