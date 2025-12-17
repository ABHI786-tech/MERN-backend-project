const mongoose = require("mongoose")
const staffSchema = require("../models/staffModel")


async function createStaff(req, res) {
    try {
        const {name, email} = req.body
        const staff = await staffSchema.create({ name, email})
        await staff.save();
        return res.send({ staff, message: "staff created successfully" })
       
    }
    catch (err) {
        console.log(err)
        res.status(404).send({ error: err, message: "Failed to create staff" })

    }
}

module.exports = {
     createStaff
     }