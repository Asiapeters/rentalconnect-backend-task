// // reads listings json file and parses it
// var fs = require('fs');
// var featuredRentals = JSON.parse(fs.readFileSync('./data/listings.json','utf8'));

const rentalsEndpoint = "http://localhost:3000/api/rentals";
const options = {
    method: "GET",
    headers: { Accept: "application/json" },
};

/* GET home page view */

const index = async function (req, res, next) {
    await fetch(rentalsEndpoint, options)
        .then((res) => res.json())
        .then((json) => {
            let message = null;
            if(!(json instanceof Array)) {
                message = 'API lookup error';
                json = [];
            } else {
                if(!json.length) {
                    message = "No rentals exist in our database"
                }
            }
            let rentals = Array.isArray(json) ? json : json.data || [];
            res.render("index", {
                title: "RentalConnect - Affordable College Rentals",
                rentals,
            }); // Displays featured rentals data in view
        })
        .catch((err) => res.status(500).send(err.message));
};

module.exports = {
    index,
};
