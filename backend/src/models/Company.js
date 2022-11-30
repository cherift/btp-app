const mongoose = require('mongoose');
const User = require('./User');

const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    companyName: {
        type: String,
        required: true,
        unique: true,
    },
    contact: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Please enter a valid email"]
    },
    SIRET: {
        type: String,
        required: true,
        unique: true,
    },
    adresse: {
        type: String,
        required: true,
    },
    director: {
        type: User.schema,
        required: true
    }
});

const companyModel = mongoose.model("Company", CompanySchema);

module.exports = companyModel;