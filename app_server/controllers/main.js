// reads listings json file and parses it
var fs = require('fs');
var featuredListings = JSON.parse(fs.readFileSync('./data/listings.json','utf8'));

/* GET home page view */

const index = (req, res) => {
    res.render("index", {
        title: "RentalConnect - Affordable College Rentals",
        featuredListings // Displays featured listings data in view
    });
};

module.exports = {
    index,
};
