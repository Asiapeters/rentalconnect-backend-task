/* GET form view */
const form = (req, res) => {
    res.render("form", {
        title: "RentalConnect - List Your Rental",
    });
};

module.exports = {
    form
};
