var express = require('express');
var router = express.Router();

router.use('/users', require('./users'))
router.use('/products', require('./products'))
router.use('/transactions', require('./transactions'))



module.exports = router