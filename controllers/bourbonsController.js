const express = require("express")

const bourbons = express.Router()

const { checkName } = require("../middleware/nameValidation.js") // Importing the checkName function from the nameValidation.js file

const { getAllBourbons, getOneBourbon } = require("../queries/amberoak.js")
//--------------------Get ALL
// http://localhost/bourbons
bourbons.get("/", async (req, res) => {
    const allBourbons = await getAllBourbons()
    res.status(200).json(allBourbons)
})

//----------------Get one by
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

bourbons.post("/", checkName, (req, res) => {
    const body = req.body
    // console.log(body);
    res.status(200).json({
        message:
            body
    })
})

bourbons.put("/:bourbonsID", checkName, (req, res) => {
    const bourbonsID = req.params.bourbonsID
    const body = req.body
    res.status(200).json({ body: body, bourbonID: bourbonsID })

})

bourbons.delete("/:bourbonsID", (req, res) => {
    const bourbonsID = req.params.bourbonsID

    if (Number(bourbonsID)) {
        res.status(200).json({ message: `delete ${bourbonsID}` })

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

