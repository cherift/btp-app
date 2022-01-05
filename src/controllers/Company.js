const Company = require('../models/Company');

/**
 * Gets all the company
 */
const getCompanies = async (req, res, next) => {
    try {
      const companies = await Company.find();
      res.status(200).json(companies);
    } catch (error) {
      res.status(401).json(error);
      next(error);
    }
};


/**
 * Adds new company
 */
const addCompany = async (req, res, next) => {
    try {
    const company = new Company(req.body);

    const result = await company.save();
    res.status(200).json(result);
    } catch (error) {
      res.status(401).json(error);
      next(error);
    }
};

module.exports = {
    GetCompanies: getCompanies,
    AddCompany: addCompany
};