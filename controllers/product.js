const products = [];

exports.getAddProduct =  (req, res, next) => {
    res.render('product', {
        pageTitle: 'add-product'
    });
};

exports.postAddProduct = (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
};

exports.getProduct = (req, res) => {
    res.render('shop', {
        pageTitle: 'home', 
        prods: products
    });
 }