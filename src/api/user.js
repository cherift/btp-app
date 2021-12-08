const express = require('express');

const router = express.Router();

const User = require('../models/User');

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(401).json(error);
    next(error);
  }
});

router.post('/', async (req, res, next) => {
    try {
    const user = new User(req.body);

    const result = await user.save();
    res.status(200).json(result);
    } catch (error) {
      res.status(401).json(error);
      next(error);
    }
  });

  module.exports = router;