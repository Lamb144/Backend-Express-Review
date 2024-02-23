const db = require("../db/dbConfig.js");

const getAllBourbons = async () => {
    try {
        const allAmberoaks = await db.any("SELECT * FROM amberoak_dev")
        return allAmberoaks

    } catch (error) {
        return error
    }
}

const getOneBourbon = async (bourbonsID) => {
    try {
        // db.one(arg1, arg2)
        const oneBourbon = await db.one('SELECT * FROM amberoak_dev WHERE id = $1', bourbonsID)
        return oneBourbon
    } catch (error) {
        return error
    }
}

const updateBourbon = async (idValue, valueObj) => {
    try {
        const updatedBourbon = await db.one('UPDATE amberoak_dev SET bourbon_name=$1, geographic_orgin=$2,abv=$3, description=$4 WHERE id=$5 RETURNING *', [
            valueObj.bourbon_name,
            valueObj.geographic_orgin,
            valueObj.abv,
            valueObj.description,
            idValue
        ])

        return updatedBourbon

    } catch (error) {
        return error
    }
}

const deleteBourbon = async (bourbonsID) => {
    try {
        const deletedBourbon = await db.one('DELETE FROM amberoak_dev WHERE id=$1 RETURNING *', bourbonsID)
        return deletedBourbon

    } catch (error) {
        return error
    }
}




module.exports = {
    getAllBourbons,
    getOneBourbon,
    updateBourbon,
    deleteBourbon
}