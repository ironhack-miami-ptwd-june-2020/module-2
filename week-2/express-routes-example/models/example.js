const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const exampleSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            enum: [
                "Orange",
                "Yellow",
                "White",
                "Black",
                "Brown",
                "Tiger Stripes",
            ],
        },
        age: {
            type: Number,
            default: 7,
        },
        users: { type: [{ type: Schema.Types.ObjectId, ref: "User" }] },
    },
    {
        timestamps: true,
    }
);

const Example = model("Example", exampleSchema);

module.exports = Example;
