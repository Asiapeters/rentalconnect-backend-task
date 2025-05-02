const mongoose = require("mongoose");

// define rental schema
const rentalSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: {
        type: String,
        default: "listing-default.png",
        set: (val) => (val && val.trim() !== "" ? val : "listing-default.png"),
    },
    propertyType: { type: String, required: true },
    rentAmount: { type: String, required: true },
    rooms: { type: Number, required: true, min: 1 },
    location: { type: String, required: true },
    contactName: { type: String, required: true },
    contactEmail: { type: String, required: true },
    contactPhone: { type: String },
    featured: { type: Boolean, default: false },
});

const Rental = mongoose.model("rentals", rentalSchema);
module.exports = Rental;
