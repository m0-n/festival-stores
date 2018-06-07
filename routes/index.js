const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);


// Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works!');
});

module.exports = router;
