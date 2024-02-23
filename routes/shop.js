
const express = require('express');
const path = require('path');

const router = express.Router();
const shopController = require("../controllers/shop")
const productController = require("../controllers/product")

router.get('/contact', shopController.contactPage);
router.get('/about', shopController.aboutPage)
router.get('/', productController.getProduct);

module.exports = router;






