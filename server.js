const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

// init the database access
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// render 404 page
app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'application/json')
        .status(404)
        .json({
            code : 404,
            message  : 'route not exist'
        });
});

app.listen(PORT, () => console.log(`Project is running on http://localhost:${PORT}`));