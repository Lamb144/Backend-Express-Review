const db = require("../db/dbConfig.js");

const getAllAmberoaks = async () => {
    try {
        const allAmberoaks = await db.any("SELECT * FROM amberoak_dev")
        return allAmberoaks

    } catch (error) {
        return error
    }

}


module.exports = {
    getAllAmberoaks
}