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

app.get("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id)
    console.log("userId antes " + userId);
    const targetUser = mockUsersDatabase.find(user => user.id === userId)
    console.log("targetUser" + targetUser);


    // CODIGO ABAIXO IGUAL A LINHA 42:
    // const jonas = listaDeDicionarios.find((user) => {
    //     return user.name === "Helio"
    // })
    res.status(200).json(targetUser);

    // if (user) {
    //     res.status(200).json(user)
    // } else {
    //     res.status(404).json({ message: "User not found" })
    // }



    
})

app.put("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const { email } = req.body;
    let isUserFound = false;

    mockUsersDatabase.forEach(user => {
        if(user.id === userId){
            user.email = email;
            isUserFound = true;
        } 
    });
    // let counter = 0;

    
    // const targetUser = mockUsersDatabase.find(user => user.id === userId);

    // const targetUser = mockUsersDatabase.find((user) => {
    //    counter += 1;
    
        
    //     return user.id === userId;
    // });

    
    // if (!!targetUser == true) {
    //     mockUsersDatabase[counter-1].email = email;
    //     res.status(200).json({message: `user ${email} changed`}); 
    // }
    // else{
    //     res.status(404).json({message: `não rolou meu pcro`});  
    // }

   if (isUserFound === true){
    res.status(200).json({message: `user ${email} changed`});
   }
   else{
    res.status(404).json({message: `não rolou meu pcro`});
   }
})

app.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = mockUsersDatabase.findIndex(user => user.id === userId);
    
    if (userIndex !== -1) {
        mockUsersDatabase.splice(userIndex, 1);
        res.status(200).json({message: `user ${userId} deleted`}); 
    }
    else{
    res.status(404).json({message: `user not found`});
    }
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} :)`) 
})

