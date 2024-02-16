const express = require("express")

const bourbons = express.Router()

// http://localhost/bourbons
bourbons.get("/", (req, res) => {
    res.status(200).json({ message: "Bourbons Home Page" })
})

module.exports = bourbons