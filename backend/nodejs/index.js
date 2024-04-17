const express = require("express");
const cors = require("cors");
const app = express();
const axios = require(`axios`);
const MockUsersDatabase = require("./src/db/index.js");

const PORT = 8080;

const DB = new MockUsersDatabase();

app.use(cors());

app.use(express.json());

app.get("/ping", (req, res) => {
    console.log(`[GET /ping]`)
    res.status(200).json({message: "pong"})
})

app.get("/proxy", async (req, res) => {
    const URL = `http://localhost:8081`;
    const info = await axios.get(URL);

    res.status(200).json(info.data);
})

app.get("/pokemon/:pokemonName", async (req, res) => {
    const pokemonName = req.params.pokemonName;
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    const pokemon =  await axios.get(URL);

    res.status(200).json(pokemon.data);
})

app.get("/users", (req, res) => {
    console.log(`[GET /users]`)
    res.status(200).json(DB.getUsers());
})

app.post("/users", (req, res) => {
    const { name, email } = req.body;
    console.log(`[POST /users]`)
    DB.createUser(name,email);
    res.status(200).json({message: `user ${name} created`})
})

app.get("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    console.log(`[GET /users/${userId}]`)
    const targetUser = DB.getUserById(userId);

    res.status(200).json(targetUser);

})

app.put("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    console.log(`[PUT /users/${userId}]`)
    const { email } = req.body;
    const isUserFound = DB.updateEmailById(userId, email);
    
   if (isUserFound === true){
       res.status(200).json({message: `user ${email} changed`});
   }
   else{
       res.status(404).json({message: `não rolou meu pcro`});
   }
})

app.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    console.log(`[DELETE /users/${userId}`)
    const isUserFound = DB.deleteUserById(userId); 
    
    if (isUserFound === true){
        res.status(200).json({message: `user ${userId} deleted`});
    }
    else{
        res.status(404).json({message: `não rolou meu pcro`});
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} :)`) 
})