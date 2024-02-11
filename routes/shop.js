
const express = require('express');
const path = require('path');

const router = express.Router();

const adminData = require('./admin')

router.get('/', (req, res) => {
   console.log(adminData.products);
   res.render('index', {pageTitle: 'home'});
});


module.exports = router;






