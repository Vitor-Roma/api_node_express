const personModel = require("../models/personModel")

const getAll = async (request, response) => {

    const persons = await personModel.getAll();
    response.status(200).json(persons);

}

const createPerson = async (request, response) => {
    const createdPerson = await personModel.createPerson(request.body)
    response.status(201).json(createdPerson)
}

const deletePerson = async (request, response) => {
    const {id} = request.params

    await personModel.deletePerson(id)
    response.status(204).json(id)
}

const updatePerson = async (request, response) => {
    const {id} = request.params
    const updatedPerson = await personModel.updatePerson(id, request.body)
    response.status(200).json(updatedPerson)
}

module.exports = {
    getAll,
    createPerson,
    deletePerson,
    updatePerson
}