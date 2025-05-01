const express = require('express');
const router = express.Router();

const listingsController = require('../controllers/listings');

router
    .route('/listings')
    .get(listingsController.rentalList);

router
    .route('/listings/:id')
    .get(listingsController.rentalListByID);

module.exports = router;