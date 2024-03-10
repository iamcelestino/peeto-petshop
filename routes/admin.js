const express = require('express');

const router = express.Router();

const AdminController = require('../controllers/admin');

router.get('/product', AdminController.getProduct);
router.get('/add-product', AdminController.getAddProduct);
router.post('/add-product', AdminController.postAddProduct);

module.exports = router;
