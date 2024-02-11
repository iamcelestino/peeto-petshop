const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const errorControllers = require('./controllers/404');

app.set('view engine',  'ejs');
app.set('views', 'views');

const adminRouter = require('./routes/admin');
const userRouter = require('./routes/shop');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use('/admin', adminRouter);
app.use(userRouter);
app.use(errorControllers.pageNotFoundError);

app.listen(3000);