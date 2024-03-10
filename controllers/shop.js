const Product = require('../model/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/shop', {
            pageTitle: 'home', 
            prods: products
        });
    });
}

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    console.log(prodId);
    res.redirect('/');
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

exports.cart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart',
        path: '/cart'
    })
}

exports.checkout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'checkout',
        path: '/checkout'
    })
}

exports.orders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'orders',
        path: '/orders'
    })
}

exports.productList = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            pageTitle: 'shop/product-List',
            path: 'Your products',
            prods: products
          });
    })
}