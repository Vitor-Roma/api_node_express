const validateBody = (request, response, next) => {
    const {body} = request

    if (body.name === undefined) {
        return response.status(400).json({message: "'Name' is a required Field"})
    }

    if (body.name === "") {
        return response.status(400).json({message: "Name cannot be empty"})
    }

    if (body.job === undefined) {
        return response.status(400).json({message: "'Job' is a required Field"})
    }

    if (body.job === "") {
        return response.status(400).json({message: "Job cannot be empty"})
    }

    if (body.language === undefined) {
        return response.status(400).json({message: "'Language' is a required Field"})
    }

    if (body.language === "") {
        return response.status(400).json({message: "Language cannot be empty"})
    }

    next()

}

module.exports = {
    validateBody,
}