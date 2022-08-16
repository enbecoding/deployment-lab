const express = require("express")
const cors = require("cors")
const app = express()

const { getAdHome } = require("./server/controllers/controller.js")

app.use(cors())
app.use(express.json())
app.use(express.static('client'))

app.get("/", getAdHome)

const port = process.env.PORT || 4000

app.listen(port, console.log("Server running on 4000"));