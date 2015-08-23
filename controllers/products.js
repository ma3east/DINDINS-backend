var express = require('express');
var router = express.Router();

router.use('/api', router);
// router.use('/api', require('./index'))

// router.get('/api/products', function(req, res, err) {

//   if (err)
//     console.log(err);

//   res.json({ message: 'This is the api products index.'});
//   //need to return all products
// });




module.exports = router