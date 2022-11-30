const express = require('express');
const companyController = require('../controllers/Company');
const { route } = require('./user');

const router = express.Router();

router.get('/', companyController.GetCompanies);

router.post('/', companyController.AddCompany);

module.exports = router;