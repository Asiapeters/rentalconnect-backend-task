const Mongoose = require('./db');
const Rental = require('./rental');

// Imports data from listing.json
var fs = require('fs');
var rentals = JSON.parse(fs.readFileSync('./data/listings.json','utf8'));

// deletes any existing records and inserts seeded data
const seedDB = async () => {
    await Rental.deleteMany({});
    await Rental.insertMany(rentals);
}

// closes the MongoDB connection and exits
seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
})