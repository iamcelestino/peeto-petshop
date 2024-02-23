

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