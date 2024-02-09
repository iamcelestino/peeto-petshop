const express = require('express');
const path = require('path');

const router = express.Router();

const products = [];

router.get('/addproduct', (req, res, next) => {
    res.render('product',  {pageTitle: 'add-product'});
});

router.post('/addproduct', (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/');
});

exports.routes = router; 
exports.products = products;