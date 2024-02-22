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


module.exports = {
    getAllBourbons,
    getOneBourbon
}