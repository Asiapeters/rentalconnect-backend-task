// // reads listings json file and parses it
// var fs = require('fs');
// var rentalListings = JSON.parse(fs.readFileSync('./data/listings.json','utf8'));

const listingsEndpoint = "http://localhost:3000/api/listings";
const options = {
    method: "GET",
    headers: { Accept: "application/json" },
};

/* GET listings view */
const listings = async function (req, res, next) {
    await fetch(listingsEndpoint, options)
        .then((res) => res.json())
        .then((json) => {
            let message = null;
            if(!(json instanceof Array)) {
                message = 'API lookup error';
                json = [];
            } else {
                if(!json.length) {
                    message = "No trips exist in our database"
                }
            }    
            res.render("listings", {
                title: "RentalConnect - Available Listings",
                 rentalListings: json // Displays rental listings data in view
            });
        })
        .catch((err) => res.status(500).send(e.message));
};


module.exports = {
    listings,
};
