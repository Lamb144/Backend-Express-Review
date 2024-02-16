const express = require("express")

const bourbons = express.Router()

// http://localhost/bourbons
bourbons.get("/", (req, res) => {
    res.status(200).json({ message: "Bourbons Home Page" })
})


bourbons.get("/:bourbonsID", (req, res) => {
    const bourbonsID = req.params.bourbonsID

    if (Number(bourbonsID)) {
        res.status(200).json({ message: bourbonsID })

    }
    else {
        res.status(404).json({
            error: "id must be a numeric value"
        })
    }

})

module.exports = bourbons

