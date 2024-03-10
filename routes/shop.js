
const express = require('express');
const path = require('path');

const router = express.Router();
const shopController = require("../controllers/shop")


router.get('/product-list', shopController.productList)
router.get('/product/:productId', shopController.getProduct);
router.get('/orders', shopController.orders);
router.get('/checkout', shopController.checkout)
router.get('/cart', shopController.cart);
router.get('/contact', shopController.contactPage);
router.get('/about', shopController.aboutPage)
router.get('/', shopController.getProducts);

module.exports = router;






