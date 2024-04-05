const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 8080

app.use(cors())

app.get("/", (req, res) => {
    res.status(200).json({hello: "world"})
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
