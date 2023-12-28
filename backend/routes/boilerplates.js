const express = require("express");
const {
    getBoilerplates,
    getBoilerplate,
    createBoilerplate,
    deleteBoilerplate,
    updateBoilerplate,
} = require("../controllers/boilerplateController");

const router = express.Router();

//GET all boilerplates
router.get("/", getBoilerplates);

//GET single boilerplate
router.get("/:id", getBoilerplate);

//POST new boilerplate
router.post("/", createBoilerplate);

//DELETE a boilerplate
router.delete("/:id", deleteBoilerplate);

//UPDATE new boilerplate
router.patch("/:id", updateBoilerplate);

module.exports = router;
