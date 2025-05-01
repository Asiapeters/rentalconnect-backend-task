var express = require('express');
var router = express.Router();
const controllerListings = require('../controllers/listings');

/* GET home page */
router.get('/', controllerListings.listings);

module.exports = router;