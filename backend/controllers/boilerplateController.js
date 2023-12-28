const Boilerplate = require("../models/boilerplateModel");
const mongoose = require("mongoose");

//GET all boilerplates
const getBoilerplates = async (req, res) => {
    const boilerplates = await Boilerplate.find({}).sort({ createdAt: -1 });

    res.status(200).json(boilerplates);
};

//GET single boilerplate
const getBoilerplate = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such Boilerplate" });
    }

    const boilerplate = await Boilerplate.findById(id);

    if (!boilerplate) {
        return res.status(404).json({ error: "No such Boilerplate" });
    }

    res.status(200).json(boilerplate);
};

//CREATE new boilerplate
const createBoilerplate = async (req, res) => {
    const { title, author, number } = req.body;

    try {
        const boilerplate = await Boilerplate.create({ title, author, number });
        res.status(200).json(boilerplate);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

//DELETE a boilerplate
const deleteBoilerplate = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such Boilerplate" });
    }

    const boilerplate = await Boilerplate.findOneAndDelete({ _id: id });

    if (!boilerplate) {
        return res.status(404).json({ error: "No such Boilerplate" });
    }

    res.status(200).json(boilerplate);
};

//UPDATE a boilerplate

const updateBoilerplate = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such Boilerplate" });
    }

    const boilerplate = await Boilerplate.findOneAndUpdate(
        { _id: id },
        {
            ...req.body,
        }
    );

    if (!boilerplate) {
        return res.status(404).json({ error: "No such Boilerplate" });
    }

    res.status(200).json(boilerplate);
};

//export Functions
module.exports = {
    getBoilerplates,
    getBoilerplate,
    createBoilerplate,
    deleteBoilerplate,
    updateBoilerplate,
};
