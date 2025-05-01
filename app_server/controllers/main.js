/* GET home page view */

const index = (req, res) => {
    res.render("index", {
        title: "RentalConnect - Affordable College Rentals",
    });
};

module.exports = {
    index,
};
