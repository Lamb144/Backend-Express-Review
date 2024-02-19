const express = require("express")

const bourbons = express.Router()

const { checkName } = require("../middleware/nameValidation.js") // Importing the checkName function from the nameValidation.js file

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

bourbons.post("/", checkName, (req, res) => {
    const body = req.body
    // console.log(body);
    res.status(200).json({
        message:
            body
    })
})








module.exports = bourbons

// http://localhost:3001
/* req = {
    body: {

    },
    params : {
        videogameID: "destiny"
    },
    query : {
        name : "code"
    }

} */

