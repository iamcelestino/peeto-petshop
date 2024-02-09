const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine',  'ejs');
app.set('views', 'views');

const adminRouter = require('./routes/admin');
const userRouter = require('./routes/users');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use('/admin', adminRouter.routes);
app.use(userRouter);
app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: '404'});
});


app.listen(3000);