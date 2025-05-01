// reads listings json file and parses it
var fs = require('fs');
var rentalListings = JSON.parse(fs.readFileSync('./data/listings.json','utf8'));

/* GET listings view */
const listings = (req, res) => {
    res.render("listings", {
        title: "RentalConnect - Available Listings",
        rentalListings // Displays rental listings data in view
    });
};

module.exports = {
    listings,
};
