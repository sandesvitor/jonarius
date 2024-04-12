import express from "express"
import cors from "cors"
import route from "./src/routes"

const PORT = 9090

const app = express()

app.use(express.json())
app.use(cors())

app.use(route)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
