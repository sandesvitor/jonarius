import { Router, Request, Response } from 'express';
import MockDatabase from "../db-interface"

const DB: MockDatabase = new MockDatabase() 

const route = Router()

route.get("/ping", (_, res: Response) => {
  res.status(200).json({message: "pong"})
})

route.get("/users", (req: Request, res: Response) => {
  const users = DB.getUsers()
  res.status(200).json(users)
})

route.post("/users", (req: Request, res: Response) => {
  const { name, email } = req.body

  DB.addUser(name, email)
  res.status(200).json({message: `user ${name} created`})
})

route.get("/users/:id", (req: Request, res: Response) => {
  const userId = parseInt(req.params.id)

  const user = DB.getUserById(userId)

  res.status(200).json(user);
})

route.put("/users/:id", (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const { email } = req.body;

  if (DB.updateUserEmail(userId, email) === true) {
      res.status(200).json({message: `user ${email} changed`});
  } else {
      res.status(404).json({message: `não rolou meu pcro`});
  }
})

route.delete("/users/:id", (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);

  if (DB.deleteUserById(userId)){
      res.status(200).json({message: `user ${userId} deleted`}); 
  } else {
      res.status(404).json({message: `user not found`});
  }
})


export default route
