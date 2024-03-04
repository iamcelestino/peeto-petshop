const Product = require('../model/product');

exports.getProduct = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/shop', {
            pageTitle: 'home', 
            prods: products
        });
    });
}

exports.aboutPage = (req, res, next) => {
    res.render('shop/about', {
        pageTitle: 'about',
        path: '/about'
    });
}


exports.contactPage = (req, res, next) => {
    res.render('shop/contact', {
        pageTitle: 'contact',
        path: '/contact'
    });
}