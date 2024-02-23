const db = require("../db/dbConfig.js");


//  --------------READ ALL (GET)
const getAllBourbons = async () => {
    try {
        const allAmberoaks = await db.any("SELECT * FROM amberoak_dev")
        return allAmberoaks

    } catch (error) {
        return error
    }
}

//------------------READ ONE (GET)
const getOneBourbon = async (bourbonsID) => {
    try {
        // db.one(arg1, arg2)
        const oneBourbon = await db.one('SELECT * FROM amberoak_dev WHERE id = $1', bourbonsID)
        return oneBourbon
    } catch (error) {
        return error
    }
}

// ----------UPDATE (PUT)
const updateBourbon = async (idValue, valueObj) => {
    try {
        const updatedBourbon = await db.one('UPDATE amberoak_dev SET bourbon_name=$1, geographic_origin=$2,abv=$3, description=$4 WHERE id=$5 RETURNING *', [
            valueObj.bourbon_name,
            valueObj.geographic_origin,
            valueObj.abv,
            valueObj.description,
            idValue
        ])

        return updatedBourbon

    } catch (error) {
        return error
    }
}

// --------------DELETE
const deleteBourbon = async (bourbonsID) => {
    try {
        const deletedBourbon = await db.one('DELETE FROM amberoak_dev WHERE id=$1 RETURNING *', bourbonsID)
        return deletedBourbon

    } catch (error) {
        return error
    }
}

// --------------- (CREATE)
const createBourbon = async (valueObj) => {
    try {
        const newBourbon = await db.one('INSERT INTO amberoak_dev (bourbon_name, geographic_origin, abv, tasting_notes, food_pairings, description) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *', [
            valueObj.bourbon_name,
            valueObj.geographic_origin,
            valueObj.abv,
            valueObj.tasting_notes,
            valueObj.food_pairings,
            valueObj.description
        ])

        return newBourbon

    } catch (error) {
        return error
    }
}




module.exports = {
    getAllBourbons,
    getOneBourbon,
    updateBourbon,
    deleteBourbon,
    createBourbon

}