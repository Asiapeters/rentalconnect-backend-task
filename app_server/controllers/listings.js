/* GET listings view */

const listings = (req, res) => {
    res.render("listings", {
        title: "RentalConnect - Available Listings",
    });
};

module.exports = {
    listings,
};
