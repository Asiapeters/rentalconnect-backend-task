const express = require('express');
const router = express.Router();

const rentalsController = require('../controllers/rental');

router
    .route('/rentals')
    .get(rentalsController.rentalList) // GET Method routes rentals
    .post(rentalsController.rentalsAddRental); // POST Method to add rentals

router
    .route('/rentals/:id')
    .get(rentalsController.rentalListByID); // GET Method routes rentals by id

module.exports = router;