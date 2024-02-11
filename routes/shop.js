
const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
   console.log();
   res.render('index', {pageTitle: 'home'});
});

module.exports = router;






