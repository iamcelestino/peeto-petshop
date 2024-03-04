
const express = require('express');
const path = require('path');

const router = express.Router();
const shopController = require("../controllers/shop")

router.get('/contact', shopController.contactPage);
router.get('/about', shopController.aboutPage)
router.get('/', shopController.getProduct);

module.exports = router;






