const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const boilerplateSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        number: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Boilerplate", boilerplateSchema);
