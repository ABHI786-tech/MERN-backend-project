const mongoose = require("mongoose");

const RightSchema = new mongoose.Schema(
    {
        employee_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'employees'
        },
        right: {
            type: String,
        },
        status: {
            type: String,
        }
    },
    {
        timestamps: true, 
    }
);

module.exports = mongoose.model("right", RightSchema);

