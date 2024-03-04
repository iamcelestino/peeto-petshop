
const Product = require('../model/product');

exports.getAddProduct =  (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'add-product'
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProduct = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/product', {
            pageTitle: 'home', 
            prods: products
        });
    });
}