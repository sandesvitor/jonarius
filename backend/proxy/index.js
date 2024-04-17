const express = require("express");
const port = 8081;

//instanciando server
const app = express();

//registrando middleware
app.get("/", (_, res) => {
    console.log(`communication with API`)
    res.status(200).json({message: "hello"})
})

//startando serviço
app.listen(port, () => {
    console.log(`Server listening on port ${port} :)`)
})