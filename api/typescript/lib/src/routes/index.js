"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_abstract_class_1 = __importDefault(require("../db-abstract-class"));
const DB = new db_abstract_class_1.default();
const route = (0, express_1.Router)();
route.get("/ping", (_, res) => {
    res.status(200).json({ message: "pong" });
});
route.get("/users", (req, res) => {
    const users = DB.getUsers();
    res.status(200).json(users);
});
route.post("/users", (req, res) => {
    const { name, email } = req.body;
    DB.addUser(name, email);
    res.status(200).json({ message: `user ${name} created` });
});
route.get("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const user = DB.getUserById(userId);
    res.status(200).json(user);
});
route.put("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const { email } = req.body;
    if (DB.updateUserEmail(userId, email) === true) {
        res.status(200).json({ message: `user ${email} changed` });
    }
    else {
        res.status(404).json({ message: `não rolou meu pcro` });
    }
});
route.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    if (DB.deleteUserById(userId)) {
        res.status(200).json({ message: `user ${userId} deleted` });
    }
    else {
        res.status(404).json({ message: `user not found` });
    }
});
exports.default = route;
