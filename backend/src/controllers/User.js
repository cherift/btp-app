const User = require('../models/User');

// Gets the list of users
const getUsers = async (req, res, next) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(401).json(error);
      next(error);
    }
};

// Adds new user in database
const addUser = async (req, res, next) => {
    try {
    const user = new User(req.body);

    const result = await user.save();
    res.status(200).json(result);
    } catch (error) {
      res.status(401).json(error);
      next(error);
    }
};

module.exports = {
    GetUsers: getUsers,
    AddUser: addUser
};