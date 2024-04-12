const express = require("express")
const cors = require("cors")
const app = express()

const { MockDatabase } = require("./src/database/index.js")
const DB = new MockDatabase()

const PORT = 8080

app.use(cors())

app.use(express.json());

app.get("/ping", (_, res) => {
    res.status(200).json({message: "pong"})
})

app.get("/users", (req, res) => {
    const users = DB.getUsers()
    res.status(200).json(users)
})

app.post("/users", (req, res) => {
    const { name, email } = req.body

    DB.addUser(name, email)
    res.status(200).json({message: `user ${name} created`})
})

app.get("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id)

    const user = DB.getUserById(userId)

    res.status(200).json(user);
})

app.put("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const { email } = req.body;

    if (DB.updateUserEmail(userId, email) === true) {
        res.status(200).json({message: `user ${email} changed`});
    } else {
        res.status(404).json({message: `não rolou meu pcro`});
    }
})

app.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);

    if (DB.deleteUserById(userId)){
        res.status(200).json({message: `user ${userId} deleted`}); 
    } else {
        res.status(404).json({message: `user not found`});
    }
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} :)`) 
})

