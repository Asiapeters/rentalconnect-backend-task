const mongoose = require("mongoose");
const Rental = require("../models/rental"); // Register model
const Model = mongoose.model("rentals");

// GET: /rentals - List all rentals properties
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

// GET: /rentals/:id - Lists rental property by id
const rentalListByID = async (req, res) => {
    const q = await Model.findById({ _id: req.params.id }) // No filter, return all records
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

// POST: /rentals - Adds a new rental featured
const rentalsAddRental = async (req, res) => {
    const newRental = new Rental({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        propertyType: req.body.propertyType,
        rentAmount: req.body.rentAmount,
        rooms: req.body.rooms,
        location: req.body.location,
        contactName: req.body.contactName,
        contactEmail: req.body.contactEmail,
        contactPhone: req.body.contactPhone,
        featured: req.body.featured,
    });

    const q = await newRental.save(); // No filter, return all records

    // Regarless of outcome, response must include HTML status code
    // and JSON message to the requesting client
    if (!q) {
        // No data was found in database
        return res.status(404).json(err);
    } else {
        // Redirects to rental listings
        res.status(201).redirect('/listings');
    }
};

module.exports = {
    rentalList,
    rentalListByID,
    rentalsAddRental
};
