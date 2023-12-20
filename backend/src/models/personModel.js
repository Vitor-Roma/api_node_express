const connection = require("./connection")

const getAll = async () => {
    const [persons] =  await connection.execute("SELECT * FROM persons")
    return persons
};

const createPerson = async (person) => {

    const {name} = person
    const {job} = person
    const {language} = person

    const query = `INSERT INTO persons(name, job, language) VALUES ("${name}", "${job}", "${language}")`

    const [createdPerson] = await connection.execute(query)
    return {insertId: createdPerson.insertId}
}

const deletePerson = async (id) => {
    const [deletedPerson] = await connection.execute(`DELETE FROM persons WHERE id = "${id}" `)
    return deletedPerson
}

const updatePerson = async (id, person) => {
    const {name, job, language} = person
    const [updatedPerson] = await connection.execute(`UPDATE persons SET name = "${name}", job = "${job}", language = "${language}" WHERE id = ${id}`)
    return updatedPerson
}

module.exports = {
    getAll,
    createPerson,
    deletePerson,
    updatePerson
}