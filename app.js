const express = require("express") // pull in an insitance of express and store it to a variable
const app = express()
const cors = require("cors")


app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).send("<h1>Test Backend Server<h1>")
})

app.get("*", (req, res) => {
    res.status(404).json({
        Error: "Page Not Found"
    })
})

module.exports = app
