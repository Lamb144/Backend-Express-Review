function checkName(req, res, next) {
    const name = req.body.name;
    if (typeof name === "string") {
        const nameArr = name.split(" ");
        const firstName = nameArr[0];
        const lastName = nameArr[1].toUpperCase();
        const firsLetterFirstName = firstName.charAt(0).toUpperCase();
        const restOfFirstName = firstName.slice(1).toLowerCase();
        const convertedFirstName = `${firsLetterFirstName}${restOfFirstName}`

        req.body.name = `${convertedFirstName} ${lastName}`;

        next() // All middleware must have the "next()" method so that it can move on after the completed validation.
    }
    else {
        res.status(404).json({
            Error: "name must be a string!"
        })
    }
}
module.exports = { checkName }