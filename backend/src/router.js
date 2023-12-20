const express = require("express");
const personController = require("./controllers/personController")
const personMiddleware = require("./middlewares/personMiddleware")

const router = express.Router();

router.get("/persons/", personController.getAll)
router.post("/persons/", personMiddleware.validateBody, personController.createPerson)
router.delete("/persons/:id", personController.deletePerson)
router.patch("/persons/:id", personController.updatePerson)


module.exports = router;