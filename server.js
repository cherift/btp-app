const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');

const userRouter = require('./src/api/user');
const companyRouter = require('./src/api/company');

dotenv.config();

const app = express();

// init the database access
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(morgan('common'));
app.use(express.json());

app.use('/user', userRouter);
app.use('/company', companyRouter);

// render 404 page
app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'application/json')
        .status(404)
        .json({
            code : 404,
            message  : 'request not found'
        });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Project is running on http://localhost:${PORT}`));