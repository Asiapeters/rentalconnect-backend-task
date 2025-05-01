const mongoose = require("mongoose");
const Listing = require("../models/rental"); // Register model
const Model = mongoose.model("listings");

// GET: /listings - List all the rentals
const rentalList = async (req, res) => {
    const q = await Model.find({}) // No filter, return all records
        .exec();

    // Regarless of outcome, response must include HTML status code
    // and JSON message to the requesting client
    if (!q) {
        // No data was found in database
        return res.status(404).json(err);
    } else {
        // Return rental list
        return res.status(200).json(q);
    }
};

// GET: /listings/:id - List all the rentals
const rentalListByID = async (req, res) => {
    const q = await Model.find({'_id' : req.params.id}) // No filter, return all records
        .exec();

    // Regarless of outcome, response must include HTML status code
    // and JSON message to the requesting client
    if (!q) {
        // No data was found in database
        return res.status(404).json(err);
    } else {
        // Return rental list
        return res.status(200).json(q);
    }
};
module.exports = {
    rentalList,
    rentalListByID
};
