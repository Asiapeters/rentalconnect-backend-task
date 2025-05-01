var express = require('express');
var router = express.Router();
const controllerForm = require('../controllers/form');

/* GET form page */
router.get('/', controllerForm.form);

module.exports = router;