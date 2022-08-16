const express = require("express")
const cors = require("cors")
const app = express()

const { getAdHome, getCSS, getJS, getPage2 } = require("./server/controllers/controller.js")

app.use(cors())
app.use(express.json())
app.use(express.static('client'))

app.get("/", getAdHome)
app.get("/CSS", getCSS)
app.get("/JS", getJS)
app.get("/page2", getPage2)


const port = process.env.PORT || 4000

app.listen(port, console.log("Server running on 4000"));