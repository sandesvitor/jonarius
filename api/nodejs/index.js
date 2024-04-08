const express = require("express")
const cors = require("cors")
const app = express()

const PORT = 8080
let currentId = 1

const mockUsersDatabase = []

app.use(cors())

app.use(express.json());

app.get("/ping", (req, res) => {
    res.status(200).json({message: "pong"})
})

app.get("/users", (req, res) => {
    res.status(200).json(mockUsersDatabase)
})

app.post("/users", (req, res) => {
    const { name, email } = req.body
    const newUser = {
        id: currentId,
        name: name,
        email: email
    }

    currentId += 1

    mockUsersDatabase.push(newUser)

    res.status(200).json({message: `user ${name} created`})
})

// criar rota GET de users que retorne um usuario especifico.
// criar rota PUT de users que altere o email de um usuario. 


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} :)`) 
})
