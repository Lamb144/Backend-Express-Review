const express = require("express")

const bourbons = express.Router()

const { checkName } = require("../middleware/nameValidation.js") // Importing the checkName function from the nameValidation.js file

const { getAllBourbons, getOneBourbon, updateBourbon, deleteBourbon, createBourbon } = require("../queries/amberoak.js")


//--------------------Get ALL
// http://localhost/bourbons
bourbons.get("/", async (req, res) => {
    const allBourbons = await getAllBourbons()
    res.status(200).json(allBourbons)
})

//--------------------Get one by ID
bourbons.get("/:bourbonsID", async (req, res) => {
    const bourbonsID = req.params.bourbonsID

    if (Number(bourbonsID)) {
        const oneBourbon = await getOneBourbon(bourbonsID)
        res.status(200).json(oneBourbon)
    }
    else {
        res.status(404).json({
            error: "id must be a numeric value"
        })
    }

})
//---------------------Get Post (Create)
bourbons.post("/", async (req, res) => {
    const body = req.body
    // console.log(body);
    const newBourbon = await createBourbon(body)

    if (newBourbon.id) {
        res.status(200).json(newBourbon)
    }
    else {
        res.status(500).json(newBourbon)
    }
})


//----------------------Get Put
bourbons.put("/:bourbonsID", async (req, res) => {
    const bourbonsID = req.params.bourbonsID
    const body = req.body
    const updatedBourbon = await updateBourbon(bourbonsID, body)


    if (updatedBourbon.id) {
        res.status(200).json(updatedBourbon)
    }
    else {
        res.status(404).json(updateBourbon)
    }

})
// ---------------------Delete
bourbons.delete("/:bourbonsID", async (req, res) => {
    const bourbonsID = req.params.bourbonsID


    if (Number(bourbonsID)) {
        const deletedBourbon = await deleteBourbon(bourbonsID)

        if (deletedBourbon.id) {
            res.status(200).json(deletedBourbon)
        }
        else {
            res.send(500).json(deletedBourbon)
        }

    }
    else {
        res.status(404).json({
            error: " bourbons id must be a numeric value"
        })
    }
})








module.exports = bourbons

// http://localhost:3001
/* req = {
    body: {

    },
    params : {
        videogameID: "somthing here"
    },
    query : {
        name : "code"
    }

} */

